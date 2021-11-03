import { Module } from '@nestjs/common';

import { EnvModule } from '../env/env.module';
import { ValidatorModule } from '../validator/validator.module';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [ValidatorModule, EnvModule],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
