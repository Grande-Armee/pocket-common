import { Module } from '@nestjs/common';

import { ClsModule } from '../cls/cls.module';
import { ConfigModule } from '../config/config.module';
import { ValidatorModule } from '../validator/validator.module';
import { loggerConfigProvider } from './providers/logger-config';
import { pinoProvider } from './providers/pino';
import { LoggerService } from './services/logger/logger.service';

@Module({
  imports: [ConfigModule, ValidatorModule, ClsModule],
  providers: [pinoProvider, LoggerService, loggerConfigProvider],
  exports: [LoggerService],
})
export class LoggerModule {}
