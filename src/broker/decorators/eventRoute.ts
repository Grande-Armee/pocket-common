import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

import { applyDecorators } from './applyDecorators';

export function EventRoute(routingKey: string): MethodDecorator {
  return applyDecorators([
    RabbitSubscribe({
      exchange: 'pocketExchange',
      routingKey,
      queue: 'pocket-users-events-queue',
    }),
  ]);
}
