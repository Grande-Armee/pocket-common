import { Inject, Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

import { TRACE_ID_KEY } from '../../../cls/clsKeys';
import { ClsContextService } from '../../../cls/services/clsContext/clsContextService';
import { LogLevel } from '../../providers/loggerConfig/logLevel';
import { Pino, PINO } from '../../providers/pino';
import { LogContext, LogPayload } from './types';

@Injectable()
export class LoggerService implements NestLoggerService {
  public constructor(
    @Inject(PINO) private readonly pino: Pino,
    private readonly clsContextService: ClsContextService,
  ) {}

  private logMessage(logLevel: LogLevel, message: string, context: LogContext = null): void {
    const traceId = this.clsContextService.get<string>(TRACE_ID_KEY);

    const logPayload: LogPayload = {
      traceId,
    };

    if (typeof context === 'object' && context !== null) {
      logPayload.context = context;
    }

    this.pino[logLevel].apply(this.pino, [logPayload, message]);
  }

  public fatal(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.fatal, message, context);
  }

  public error(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.error, message, context);
  }

  public warn(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.warn, message, context);
  }

  public info(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.info, message, context);
  }

  public debug(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.debug, message, context);
  }

  public log(message: string, context?: LogContext): void {
    this.logMessage(LogLevel.info, message, context);
  }
}
