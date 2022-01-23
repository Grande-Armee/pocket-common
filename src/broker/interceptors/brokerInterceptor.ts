import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, of, switchMap } from 'rxjs';

import { TRACE_ID_KEY } from '../../cls/clsKeys';
import { ClsContextService } from '../../cls/services/clsContext/clsContextService';
import { BrokerResponseDto } from '../dtos';

@Injectable()
export class BrokerInterceptor implements NestInterceptor {
  public constructor(private readonly clsContextService: ClsContextService) {}

  public intercept(executionContext: ExecutionContext, next: CallHandler<any>): any {
    return of(null).pipe(
      switchMap(() => {
        const [content] = executionContext.getArgs<[any]>();

        const namespace = this.clsContextService.getNamespace();

        return namespace.runAndReturn(() => {
          this.clsContextService.set(TRACE_ID_KEY, content?.context?.traceId);

          return next.handle();
        });
      }),
      map((payload) =>
        BrokerResponseDto.create({
          success: true,
          payload,
        }),
      ),
      catchError((error) => {
        if (!(error instanceof Error)) {
          return of(
            BrokerResponseDto.create({
              success: false,
              payload: JSON.parse(JSON.stringify(error)),
            }),
          );
        }

        return of(
          BrokerResponseDto.create({
            success: false,
            payload: {
              name: error.name,
              stack: error.stack,
              message: error.message,
              details: JSON.parse(JSON.stringify(error)), // only custom error props will be serialized
            },
          }),
        );
      }),
    );
  }
}
