import { ConfigService } from '../../../common/config/services/config/configService';
import { Joi } from '../../../common/validator/providers/joi';
import { BrokerConfig } from './types';

export const brokerConfigFactory = async (configService: ConfigService, joi: Joi): Promise<BrokerConfig> => {
  return configService.validateConfig<BrokerConfig>(
    (envVariables) => ({
      uri: envVariables.RABBITMQ_URI,
    }),
    joi.object({
      uri: joi.string().uri().required(),
    }),
  );
};
