import { Module } from '@nestjs/common';

import { IntegrationEventsStoreFactory } from './providers/integrationEventsStoreFactory';

@Module({
  providers: [IntegrationEventsStoreFactory],
  exports: [IntegrationEventsStoreFactory],
})
export class IntegrationEventsStoreModule {}
