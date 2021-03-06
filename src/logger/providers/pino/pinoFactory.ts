import { pino } from 'pino';

import { LoggerConfig } from '../../types';
import { Pino } from './types';

export const pinoFactory = async (loggerConfig: LoggerConfig): Promise<Pino> => {
  const { prettifyLogs, logLevel } = loggerConfig;

  let instance = pino();

  if (prettifyLogs) {
    instance = pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    });
  }

  instance.level = logLevel;

  return instance;
};
