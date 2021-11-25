import { IntegrationEvent } from './integrationEvent';

export class IntegrationEventsDispatcher {
  // TODO: brokerService
  public constructor(private readonly brokerService: any) {}

  private events: IntegrationEvent<unknown>[] = [];

  public addEvent(event: IntegrationEvent<unknown>): void {
    this.events.push(event);
  }

  public getEvents(): IntegrationEvent<unknown>[] {
    return [...this.events];
  }

  public async dispatch(): Promise<void> {
    await this.events.reduce(async (result, event) => {
      await result;

      return this.brokerService.dispatch(event);
    }, Promise.resolve(null));
  }
}
