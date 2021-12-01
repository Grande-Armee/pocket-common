import { Module } from '@nestjs/common';

import { ClsModule } from '../cls/clsModule';
import { ConfigModule } from '../config/configModule';
import { ValidatorModule } from '../validator/validatorModule';
import { loggerConfigProvider } from './providers/loggerConfig';
import { pinoProvider } from './providers/pino';
import { LoggerService } from './services/logger/loggerService';

@Module({
  imports: [ConfigModule, ValidatorModule, ClsModule],
  providers: [pinoProvider, LoggerService, loggerConfigProvider],
  exports: [LoggerService],
})
export class LoggerModule {}
