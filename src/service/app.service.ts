import { HttpService, Inject, Injectable } from '@nestjs/common';
import * as _ from 'underscore';
import * as SHA1 from 'crypto-js/sha1';
import * as querystring from 'querystring';
import { ApiConfigOptionsInterface } from '../types/api-config-options.interface';
import { ApiCallParamsInterface } from '../types/api-call-params.interface';
import { parseString } from 'xml2js';
import * as base64 from 'uuid-base64';

@Injectable()
export class AppService {
  private readonly baseUrl: string;

  constructor(
    @Inject('API_OPTIONS') private readonly options: ApiConfigOptionsInterface,
    private httpService: HttpService,
  ) {
    this.baseUrl = options.url;
  }

  async query(method: string, params: ApiCallParamsInterface = {}): Promise<any> {
    const fields = params.AccountNumber
      ? { AccountNumber: base64.encode(params.AccountNumber) }
      : {};
    const values = Object.assign(params, fields);

    return new Promise((resolve, reject) => {
      this.httpService
        .get(this.buildUrl(method, values))
        .toPromise()
        .then(response => {
          const options = {
            mergeAttrs: true,
            explicitArray: false,
            trim: true,
            valueProcessors: [
              function(v: string, label: string): string | number {
                if (['ZipCode', 'Phone', 'MobilePhone'].includes(label)) {
                  return v;
                }

                if (label === 'AccountNumber' && v.length > 0) {
                  return base64.decode(v);
                }

                return isNaN(v as any) ? v : v.indexOf('.') > -1 ? Number(v) : parseInt(v, 10);
              },
            ],
          };
          parseString(response.data, options, (err, result) => {
            if (err) {
              throw err;
            }

            if (result.Response.Status.Status === 'failed') {
              resolve({ error: result.Response.Status.Message });
            }

            delete result.Response.Status;
            return resolve(result.Response);
          });
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  calculateSignature(params: ApiCallParamsInterface, salt: string): string {
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

    _.each(keys, function(key) {
      if (_.contains(excludeKeys, key)) {
        return;
      }
      const signatureString1 = ('' + key + (params[key] ? params[key] : '')).replace(/\s/g, '');

      signatureString += signatureString1;
    });
    signatureString += this.options.secret;
    signatureString += salt;

    return '' + SHA1(signatureString);
  }

  private buildUrl(method: string, params: ApiCallParamsInterface): string {
    const allParams = { ...params, method };
    const salt = new Date().getTime().toString();
    const signature = this.calculateSignature(allParams, salt);

    const queryString = querystring.stringify({
      ...params,
      method,
      api_key: this.options.token,
      api_salt: salt,
      api_signature: signature,
    });

    return [this.baseUrl, queryString].join('?');
  }
}
