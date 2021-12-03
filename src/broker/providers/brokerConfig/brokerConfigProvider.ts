import { Provider } from '@nestjs/common';

import { ConfigService } from '../../../common/config/services/config/configService';
import { JOI } from '../../../common/validator/providers/joi';
import { brokerConfigFactory } from './brokerConfigFactory';

export const BROKER_CONFIG = Symbol('BROKER_CONFIG');

export const brokerConfigProvider: Provider = {
  provide: BROKER_CONFIG,
  useFactory: brokerConfigFactory,
  inject: [ConfigService, JOI],
};
