import { Inject, Injectable } from '@nestjs/common';

import { EnvVariables, ENV_VARIABLES } from '../../../env/providers/envVariables';
import { Schema } from '../../../validator/providers/joi';
import { EnvValidationError } from '../../errors/envValidationError';

@Injectable()
export class ConfigService {
  public constructor(@Inject(ENV_VARIABLES) private readonly envVariables: EnvVariables) {}

  public async validateConfig<Config>(
    getConfig: (envVariables: EnvVariables) => Config,
    schema: Schema<Config>,
  ): Promise<Config> {
    const configValues = getConfig(this.envVariables);

    try {
      const validatedConfig: Config = await schema.validateAsync(configValues, {
        stripUnknown: true,
      });

      return validatedConfig;
    } catch (e: any) {
      throw new EnvValidationError(e.message);
    }
  }
}
