import { Module } from '@nestjs/common';

import { IntegrationEventsDispatcherFactory } from './providers/integrationEventsDispatcherFactory';

@Module({
  providers: [IntegrationEventsDispatcherFactory],
  exports: [IntegrationEventsDispatcherFactory],
})
export class IntegrationEventsDispatcherModule {}
