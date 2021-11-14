import { Inject, Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

import { TRACE_ID_KEY } from '../../../cls/clsKeys';
import { ClsContextService } from '../../../cls/services/clsContext/clsContextService';
import { Pino, PINO } from '../../providers/pino';
import { LogContext } from './interfaces';

@Injectable()
export class LoggerService implements NestLoggerService {
  public constructor(
    @Inject(PINO) private readonly pino: Pino,
    private readonly clsContextService: ClsContextService,
  ) {}

  private logMessage(methodName: keyof Pino, message: string, context: LogContext = null): void {
    const traceId = this.clsContextService.get(TRACE_ID_KEY);

    this.pino[methodName].apply(this.pino, [
      {
        context: typeof context === 'object' ? context : null,
        traceId,
      },
      message,
    ]);
  }

  public log(message: string, context?: LogContext): void {
    this.logMessage('info', message, context);
  }

  public error(message: string, context?: LogContext): void {
    this.logMessage('error', message, context);
  }

  public warn(message: string, context?: LogContext): void {
    this.logMessage('warn', message, context);
  }
}
