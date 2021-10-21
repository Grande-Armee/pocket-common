import { Provider } from '@nestjs/common';
import pino from 'pino';

import { LoggerConfig, LOGGER_CONFIG_TOKEN } from '../logger-config';
import { PINO_TOKEN } from './constants';
import { Pino } from './interfaces/pino';

export const pinoFactory = async (loggerConfig: LoggerConfig): Promise<Pino> => {
  if (loggerConfig.prettifyLogs) {
    return pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    });
  }

  return pino();
};

export const pinoProvider: Provider = {
  provide: PINO_TOKEN,
  useFactory: pinoFactory,
  inject: [LOGGER_CONFIG_TOKEN],
};
