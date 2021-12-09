import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

import { applyDecorators } from './applyDecorators';

export function RpcRoute(routingKey: string): MethodDecorator {
  return applyDecorators([
    RabbitRPC({
      exchange: 'pocketExchange',
      routingKey,
      queue: `rpc-${routingKey}`,
    }),
  ]);
}
