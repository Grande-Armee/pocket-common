import { Provider } from '@nestjs/common';

import { LoggerConfig } from '../../types';

export const LOGGER_CONFIG = Symbol('LOGGER_CONFIG');

export const createLoggerConfigProvider = (value: LoggerConfig): Provider => {
  return {
    provide: LOGGER_CONFIG,
    useValue: value,
  };
};
