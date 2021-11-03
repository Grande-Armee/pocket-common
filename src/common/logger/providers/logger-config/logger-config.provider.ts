import { Provider } from '@nestjs/common';

import { ConfigService } from '../../../config/services/config/config.service';
import { JOI } from '../../../validator/providers/joi';
import { loggerConfigFactory } from './logger-config.factory';

export const LOGGER_CONFIG = Symbol('LOGGER_CONFIG');

export const loggerConfigProvider: Provider = {
  provide: LOGGER_CONFIG,
  useFactory: loggerConfigFactory,
  inject: [ConfigService, JOI],
};
