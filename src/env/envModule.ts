import { Module } from '@nestjs/common';

import { FileSystemModule } from '../fileSystem/fileSystemModule';
import { dotenvProvider } from './providers/dotenv';
import { envVariablesProvider } from './providers/envVariables';
import { EnvService } from './services/env/envService';

@Module({
  imports: [FileSystemModule],
  providers: [dotenvProvider, envVariablesProvider, EnvService],
  exports: [EnvService, envVariablesProvider],
})
export class EnvModule {}
