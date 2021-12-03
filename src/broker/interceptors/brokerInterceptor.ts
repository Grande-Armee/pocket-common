import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, of, switchMap } from 'rxjs';

import { TRACE_ID_KEY } from '../../common/cls/clsKeys';
import { ClsContextService } from '../../common/cls/services/clsContext/clsContextService';
import { DtoFactory } from '../../common/dto/providers/dtoFactory';
import { BrokerResponseDto } from '../dtos';

@Injectable()
export class BrokerInterceptor implements NestInterceptor {
  public constructor(private readonly clsContextService: ClsContextService, private readonly dtoFactory: DtoFactory) {}

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
        this.dtoFactory.create(BrokerResponseDto, {
          success: true,
          payload,
        }),
      ),
      catchError((error) => {
        console.log({ error });

        return of(
          this.dtoFactory.create(BrokerResponseDto, {
            success: false,
            payload: JSON.parse(JSON.stringify(error)),
          }),
        );
      }),
    );
  }
}
