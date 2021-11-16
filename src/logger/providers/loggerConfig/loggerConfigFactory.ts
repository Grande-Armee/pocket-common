import { ConfigService } from '../../../config/services/config/configService';
import { Joi } from '../../../validator/providers/joi';
import { LoggerConfig } from './interfaces';
import { LogLevel } from './logLevel';

export const loggerConfigFactory = async (configService: ConfigService, joi: Joi): Promise<LoggerConfig> => {
  return configService.validateConfig<LoggerConfig>(
    (envVariables) => ({
      prettifyLogs: envVariables.LOGGER_SHOULD_PRETTIFY_LOGS,
      logLevel: envVariables.LOGGER_LOG_LEVEL,
    }),
    joi.object({
      prettifyLogs: joi.boolean().default(false),
      logLevel: joi
        .string()
        .allow(...Object.values(LogLevel))
        .default(LogLevel.debug),
    }),
  );
};
