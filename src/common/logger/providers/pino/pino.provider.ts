import { Provider } from '@nestjs/common';

import { LOGGER_CONFIG } from '../logger-config';
import { pinoFactory } from './pino.factory';

export const PINO = Symbol('PINO');

export const pinoProvider: Provider = {
  provide: PINO,
  useFactory: pinoFactory,
  inject: [LOGGER_CONFIG],
};
