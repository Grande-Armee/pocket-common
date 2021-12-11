import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

import { BrokerExchange } from '../brokerExchange';
import { applyDecorators } from './applyDecorators';

export function RpcRoute(routingKey: string): MethodDecorator {
  return applyDecorators([
    RabbitRPC({
      exchange: BrokerExchange.rpc,
      routingKey,
      queue: `rpc-${routingKey}`,
    }),
  ]);
}
