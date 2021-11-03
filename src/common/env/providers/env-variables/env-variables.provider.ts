import { Provider } from '@nestjs/common';

import { FileSystemService } from '../../../file-system/services/file-system/file-system.service';
import { PathResolverService } from '../../../file-system/services/path-resolver/path-resolver.service';
import { EnvService } from '../../services/env/env.service';
import { envVariablesFactory } from './env-variables.factory';

export const ENV_VARIABLES = Symbol('ENV_VARIABLES');

export const envVariablesProvider: Provider = {
  provide: ENV_VARIABLES,
  useFactory: envVariablesFactory,
  inject: [PathResolverService, FileSystemService, EnvService],
};
