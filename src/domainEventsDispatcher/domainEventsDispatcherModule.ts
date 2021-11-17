import { Module } from '@nestjs/common';

import { DomainEventsDispatcherFactory } from './providers/domainEventsDispatcherFactory';

@Module({
  providers: [DomainEventsDispatcherFactory],
  exports: [DomainEventsDispatcherFactory],
})
export class DomainEventsDispatcherModule {}
