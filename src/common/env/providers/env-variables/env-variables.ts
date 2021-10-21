import { Provider } from '@nestjs/common';

import { FileSystemService } from '../../../file-system/services/file-system/file-system';
import { PathResolverService } from '../../../file-system/services/path-resolver/path-resolver';
import { EnvService } from '../../services/env/env';
import { ENV_VARIABLES_TOKEN } from './constants';
import { EnvVariables } from './interfaces/env-variables';

export const envVariablesFactory = async (
  pathResolverService: PathResolverService,
  fileSystemService: FileSystemService,
  envService: EnvService,
): Promise<EnvVariables> => {
  // TODO: process.env.PARSE_ENV_FILE=true
  const envFileContents = await fileSystemService.readFile(pathResolverService.resolve(['.env']));
  const envVariables = envService.parseEnvSyntax(envFileContents);

  return {
    ...envVariables,
    ...process.env,
  };
};

export const envVariablesProvider: Provider = {
  provide: ENV_VARIABLES_TOKEN,
  useFactory: envVariablesFactory,
  inject: [PathResolverService, FileSystemService, EnvService],
};
