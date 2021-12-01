import { Injectable } from '@nestjs/common';

import { IntegrationEventsDispatcher } from './integrationEventsDispatcher';

@Injectable()
export class IntegrationEventsDispatcherFactory {
  public constructor() {}

  public create(): IntegrationEventsDispatcher {
    // TODO: brokerService
    return new IntegrationEventsDispatcher({
      dispatch: (): void => {},
    });
  }
}
