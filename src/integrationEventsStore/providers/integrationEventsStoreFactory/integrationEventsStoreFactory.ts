import { Injectable } from '@nestjs/common';

import { IntegrationEventsStore } from './integrationEventsStore';

@Injectable()
export class IntegrationEventsStoreFactory {
  public create(): IntegrationEventsStore {
    return new IntegrationEventsStore();
  }
}
