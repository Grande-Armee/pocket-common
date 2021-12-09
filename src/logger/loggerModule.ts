import { DynamicModule, Module } from '@nestjs/common';

import { ClsModule } from '../cls/clsModule';
import { createLoggerConfigProvider } from './providers/loggerConfig';
import { pinoProvider } from './providers/pino';
import { LoggerService } from './services/logger/loggerService';
import { LoggerConfig } from './types';

@Module({})
export class LoggerModule {
  public static forRoot(config: LoggerConfig): DynamicModule {
    return {
      module: LoggerModule,
      imports: [ClsModule],
      providers: [createLoggerConfigProvider(config), pinoProvider, LoggerService],
      exports: [LoggerService],
    };
  }
}
