import { Provider } from '@nestjs/common';

import { EnvService } from '../../services/env/envService';
import { envVariablesFactory } from './envVariablesFactory';

export const ENV_VARIABLES = Symbol('ENV_VARIABLES');

export const envVariablesProvider: Provider = {
  provide: ENV_VARIABLES,
  useFactory: envVariablesFactory,
  inject: [EnvService],
};
