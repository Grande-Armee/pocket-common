import { Injectable, UseInterceptors } from '@nestjs/common';

import { BrokerInterceptor } from '../interceptors';
import { applyDecorators } from './applyDecorators';

export function BrokerController(): ClassDecorator {
  return applyDecorators([UseInterceptors(BrokerInterceptor), Injectable()]);
}
