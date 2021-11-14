import { Inject, Injectable } from '@nestjs/common';

import { FileSystemService } from '../../../fileSystem/services/fileSystem/fileSystemService';
import { PathResolverService } from '../../../fileSystem/services/pathResolver/pathResolverService';
import { Dotenv, DOTENV } from '../../providers/dotenv';

@Injectable()
export class EnvService {
  public constructor(
    @Inject(DOTENV) private readonly dotenv: Dotenv,
    private readonly pathResolverService: PathResolverService,
    private readonly fileSystemService: FileSystemService,
  ) {}

  public parseEnvSyntax(envFileContents: string): Record<string, unknown> {
    return this.dotenv.parse(envFileContents);
  }

  public async readOptionalEnvFileContents(): Promise<string> {
    try {
      const envFileContents = await this.fileSystemService.readFile(this.pathResolverService.resolve(['.env']));

      return envFileContents;
    } catch {
      return '';
    }
  }
}
