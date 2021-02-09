import { HttpService, Inject, Injectable } from '@nestjs/common';
import * as _ from 'underscore';
import * as SHA1 from 'crypto-js/sha1';
import * as querystring from 'querystring';
import { ApiConfigOptionsInterface } from './types/api-config-options.interface';
import { ApiCallParamsInterface } from './types/api-call-params.interface';
import { parseString } from 'xml2js';

@Injectable()
export class AppService {
  private static readonly baseUrl = 'https://api.onlineafspraken.nl/APIREST';

  constructor(
    @Inject('API_OPTIONS') private readonly options: ApiConfigOptionsInterface,
    private httpService: HttpService,
  ) {}

  async query(method: string, params: ApiCallParamsInterface = {}): Promise<any> {

// return new Promise(resolve => {
//
//
//      parseString('<?xml version="1.0" encoding="UTF-8"?>\n' +
//       '<Response>\n' +
//       '<Status>\n' +
//       '\t<APIVersion>1.0</APIVersion>\n' +
//       '\t<Date>2021-02-09 10:58:43</Date>\n' +
//       '\t<Timestamp>1612864723</Timestamp>\n' +
//       '\t<Status>success</Status>\n' +
//       '</Status>\n' +
//       '  <Objects>\n' +
//       '<Agenda>\n' +
//       '\t<Id>25796</Id>\n' +
//       '\t<Name></Name>\n' +
//       '\t<DateFormat>D d/m/Y</DateFormat>\n' +
//       '\t<TimeFormat>H:i</TimeFormat>\n' +
//       '\t<AlignGrid>5</AlignGrid>\n' +
//       '\t<IsDefault>1</IsDefault>\n' +
//       '</Agenda>\n' +
//        '<Agenda>\n' +
//        '\t<Id>25797</Id>\n' +
//        '\t<Name></Name>\n' +
//        '\t<DateFormat>D d/m/Y</DateFormat>\n' +
//        '\t<TimeFormat>H:i</TimeFormat>\n' +
//        '\t<AlignGrid>5</AlignGrid>\n' +
//        '\t<IsDefault>1</IsDefault>\n' +
//        '</Agenda>\n' +
//       '  </Objects>\n' +
//       '</Response>', { mergeAttrs: true, explicitArray: false }, (err, result) => {
//       delete result.Response.Status;
//       resolve(result.Response);
//     });
// });
    return new Promise((resolve, reject) => {
      this.httpService
        .get(this.buildUrl(method, params))
        .toPromise()
        .then(response => {
          const options = { mergeAttrs: true, explicitArray: false, trim: true };
          parseString(response.data, options, (err, result) => {
            if (err) {
              throw err;
            }

            if(result.Response.Status.Status === 'failed'){
              reject(result.Response.Status.Message);
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
      signatureString += key + params[key];
    });
    signatureString += this.options.userSecret;
    signatureString += salt;

    return '' + SHA1(signatureString);
  }

  private buildUrl(method: string, params: ApiCallParamsInterface): string {
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
