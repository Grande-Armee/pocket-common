import * as dotenv from 'dotenv';

export type EnvVariables = Record<string, string>;

export class EnvParser {
  private readonly envVariables: EnvVariables;

  public constructor() {
    this.envVariables = this.loadEnvVariables();
  }

  private loadEnvVariables(): EnvVariables {
    const { parsed: envVariables, error } = dotenv.config();

    if (!envVariables || error) {
      throw error;
    }

    return envVariables;
  }

  public get(key: string): string {
    const value = this.envVariables[key];

    if (!value) {
      throw new Error(`Env variable ${key} not set!`);
    }

    return value as any;
  }
}
