import { Module } from '@nestjs/common';

import { ClsModule } from '../cls/cls';
import { ConfigModule } from '../config/config';
import { ValidatorModule } from '../validator/validator';
import { loggerConfigProvider } from './providers/logger-config';
import { pinoProvider } from './providers/pino';
import { LoggerService } from './services/logger/logger';

@Module({
  imports: [ConfigModule, ValidatorModule, ClsModule],
  providers: [pinoProvider, LoggerService, loggerConfigProvider],
  exports: [LoggerService],
})
export class LoggerModule {}
