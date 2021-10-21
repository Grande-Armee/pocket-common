import { Provider } from '@nestjs/common';

import { ConfigService } from '../../../config/services/config/config';
import { Joi, JOI_TOKEN } from '../../../validator/providers/joi';
import { LOGGER_CONFIG_TOKEN } from './constants';
import { LoggerConfig } from './interfaces/logger-config';

export const loggerConfigFactory = async (configService: ConfigService, joi: Joi): Promise<LoggerConfig> => {
  return configService.validateConfig<LoggerConfig>(
    (envVariables) => ({
      prettifyLogs: envVariables.SHOULD_PRETTIFY_LOGS,
    }),
    joi.object({
      prettifyLogs: joi.boolean().default(false),
    }),
  );
};

export const loggerConfigProvider: Provider = {
  provide: LOGGER_CONFIG_TOKEN,
  useFactory: loggerConfigFactory,
  inject: [ConfigService, JOI_TOKEN],
};
