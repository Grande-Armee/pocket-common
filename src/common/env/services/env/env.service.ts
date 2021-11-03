import { Inject, Injectable } from '@nestjs/common';

import { Dotenv, DOTENV } from '../../providers/dotenv';

@Injectable()
export class EnvService {
  public constructor(@Inject(DOTENV) private readonly dotenv: Dotenv) {}

  public parseEnvSyntax(envFileContents: string): Record<string, unknown> {
    return this.dotenv.parse(envFileContents);
  }
}
