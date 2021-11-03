import { Module } from '@nestjs/common';

import { ClsModule } from './cls/cls.module';
import { ConfigModule } from './config/config.module';
import { EnvModule } from './env/env.module';
import { FileSystemModule } from './file-system/file-system.module';
import { LoggerModule } from './logger/logger.module';
import { ValidatorModule } from './validator/validator.module';

@Module({
  imports: [FileSystemModule, EnvModule, ConfigModule, ValidatorModule, LoggerModule, ClsModule],
  exports: [FileSystemModule, EnvModule, ConfigModule, ValidatorModule, LoggerModule, ClsModule],
})
export class CommonModule {}
