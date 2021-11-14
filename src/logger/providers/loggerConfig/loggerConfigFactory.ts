import { ConfigService } from '../../../config/services/config/configService';
import { Joi } from '../../../validator/providers/joi';
import { LoggerConfig } from './interfaces';

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
