import { Inject, Injectable } from '@nestjs/common';

import { EnvVariables, ENV_VARIABLES } from '../../../env/providers/env-variables';
import { Schema } from '../../../validator/providers/joi';

@Injectable()
export class ConfigService {
  public constructor(@Inject(ENV_VARIABLES) private readonly envVariables: EnvVariables) {}

  public async validateConfig<Config>(
    getConfig: (envVariables: EnvVariables) => Config,
    schema: Schema<Config>,
  ): Promise<Config> {
    const configValues = getConfig(this.envVariables);

    const validatedConfig: Config = await schema.validateAsync(configValues, {
      stripUnknown: true,
    });

    return validatedConfig;
  }
}
