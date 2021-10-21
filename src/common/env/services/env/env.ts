import { Inject, Injectable } from '@nestjs/common';

import { Dotenv, DOTENV_TOKEN } from '../../providers/dotenv';

@Injectable()
export class EnvService {
  public constructor(@Inject(DOTENV_TOKEN) private readonly dotenv: Dotenv) {}

  public parseEnvSyntax(envFileContents: string): Record<string, unknown> {
    return this.dotenv.parse(envFileContents);
  }
}
