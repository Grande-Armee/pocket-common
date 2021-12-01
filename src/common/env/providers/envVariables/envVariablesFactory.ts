import { EnvService } from '../../services/env/envService';
import { EnvVariables } from './types';

export const envVariablesFactory = async (envService: EnvService): Promise<EnvVariables> => {
  const envFileContents = await envService.readOptionalEnvFileContents();
  const envVariables = envFileContents ? envService.parseEnvSyntax(envFileContents) : {};

  return {
    ...envVariables,
    ...process.env,
  };
};
