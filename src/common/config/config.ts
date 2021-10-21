import { Module } from '@nestjs/common';

import { EnvModule } from '../env/env';
import { ValidatorModule } from '../validator/validator';
import { ConfigService } from './services/config/config';

@Module({
  imports: [ValidatorModule, EnvModule],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
