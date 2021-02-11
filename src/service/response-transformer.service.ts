import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ResponseTransformer {
  transform<T>(xml: Record<string, any>, propertyPath: Array<string>, forceArray = false): T {

    if (xml.error) {
      throw new BadRequestException(xml);
    }

    let result = propertyPath.reduce((acc, prop) => {
      return acc[prop] ? acc[prop] : [];
    }, xml);

    if (forceArray) {
      result = Array.isArray(result) ? result : [result];
    }

    return result as T;
  }
}
