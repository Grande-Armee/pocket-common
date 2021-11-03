import { FileSystemService } from '../../../file-system/services/file-system/file-system.service';
import { PathResolverService } from '../../../file-system/services/path-resolver/path-resolver.service';
import { EnvService } from '../../services/env/env.service';
import { EnvVariables } from './interfaces';

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
