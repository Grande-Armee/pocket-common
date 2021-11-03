import pino from 'pino';

import { LoggerConfig } from '../logger-config';
import { Pino } from './interfaces';

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
