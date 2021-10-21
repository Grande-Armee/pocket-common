import { Module } from '@nestjs/common';

import { ClsModule } from './cls/cls';
import { ConfigModule } from './config/config';
import { EnvModule } from './env/env';
import { FileSystemModule } from './file-system/file-system';
import { LoggerModule } from './logger/logger';
import { ValidatorModule } from './validator/validator';

@Module({
  imports: [FileSystemModule, EnvModule, ConfigModule, ValidatorModule, LoggerModule, ClsModule],
  exports: [FileSystemModule, EnvModule, ConfigModule, ValidatorModule, LoggerModule, ClsModule],
})
export class CommonModule {}
