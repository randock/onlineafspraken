import { Inject, Injectable } from '@nestjs/common';
import { IApiConfigOptions } from './types/IApiConfigOptions';
import { ApiCallParams } from './types/ApiCallParams';
import * as _ from 'underscore';

@Injectable()
export class AppService {
  constructor(@Inject('API_OPTIONS') private readonly options: IApiConfigOptions) {}

  async query(methodName: string, params: ApiCallParams): Promise<string> {
    console.log(params);
    console.log(this.calculateSignature(params));
    return methodName;
  }

  calculateSignature(params: ApiCallParams, raw = ''): string {
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
      signatureString += key + params[key];
    });
    if (raw) {
      signatureString += raw;
    }
    signatureString += this.options.applicationId;
    if (this.options.userToken) {
      signatureString += this.options.userSecret;
    }

    signatureString += params.api_salt || new Date().getTime();

    return '' + CryptoJS.SHA1(signatureString);
  }
}
