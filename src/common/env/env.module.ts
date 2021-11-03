import { Module } from '@nestjs/common';

import { FileSystemModule } from '../file-system/file-system.module';
import { dotenvProvider } from './providers/dotenv';
import { envVariablesProvider } from './providers/env-variables';
import { EnvService } from './services/env/env.service';

@Module({
  imports: [FileSystemModule],
  providers: [dotenvProvider, envVariablesProvider, EnvService],
  exports: [EnvService, envVariablesProvider],
})
export class EnvModule {}
