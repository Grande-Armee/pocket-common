import { Provider } from '@nestjs/common';

import { LOGGER_CONFIG } from '../loggerConfig';
import { pinoFactory } from './pinoFactory';

export const PINO = Symbol('PINO');

export const pinoProvider: Provider = {
  provide: PINO,
  useFactory: pinoFactory,
  inject: [LOGGER_CONFIG],
};
