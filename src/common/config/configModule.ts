import { Module } from '@nestjs/common';

import { EnvModule } from '../env/envModule';
import { ValidatorModule } from '../validator/validatorModule';
import { ConfigService } from './services/config/configService';

@Module({
  imports: [ValidatorModule, EnvModule],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
