import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

import { BrokerExchange } from '../brokerExchange';
import { applyDecorators } from './applyDecorators';

export function EventRoute(routingKey: string): MethodDecorator {
  return applyDecorators([
    RabbitSubscribe({
      exchange: BrokerExchange.events,
      routingKey,
      queue: 'pocket-users-events-queue',
    }),
  ]);
}
