import { HttpService, Inject, Injectable } from '@nestjs/common';
import { IApiConfigOptions } from './types/IApiConfigOptions';
import { ApiCallParams } from './types/ApiCallParams';
import * as _ from 'underscore';
import * as SHA1 from 'crypto-js/sha1';
import * as querystring from 'querystring';

@Injectable()
export class AppService {
  private static readonly baseUrl = 'https://api.onlineafspraken.nl/APIREST';

  constructor(
    @Inject('API_OPTIONS') private readonly options: IApiConfigOptions,
    private httpService: HttpService,
  ) {}

  async query(method: string, params: ApiCallParams = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService
        .get(this.buildUrl(method, params))
        .toPromise()
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  calculateSignature(params: ApiCallParams, salt: string, raw = ''): string {
    const keys = _.keys(params);
    keys.sort();

    let signatureString = '';
    const excludeKeys = [
      'api_salt',
      'api_key',
      'api_signature',
      'api_format',
      'api_lang',
      'api_jsonp_callback',
    ];

    _.each(keys, function (key) {
      if (_.contains(excludeKeys, key)) {
        return;
      }
      signatureString += key + params[key];
    });
    // if (raw) {
    //   signatureString += raw;
    // }
    signatureString += this.options.userSecret;
    signatureString += salt;
    // if (this.options.userToken) {
    //   signatureString += this.options.userSecret;
    // }

    // signatureString += params.api_salt;

    return '' + SHA1(signatureString);
  }

  private buildUrl(method: string, params: ApiCallParams): string {
    const allParams = { ...params, method };
    const salt = new Date().getTime().toString();
    const signature = this.calculateSignature(allParams, salt);
    console.log(allParams);
    console.log(signature);

    const queryString = querystring.stringify({
      ...params,
      method,
      api_key: this.options.userToken,
      api_salt: salt,
      api_signature: signature,
    });

    const uri = [AppService.baseUrl, queryString].join('?');
    console.log(uri);

    return uri;
  }
}
