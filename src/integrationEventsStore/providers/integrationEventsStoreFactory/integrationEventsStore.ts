import { IntegrationEvent } from '../../../domain/shared';

export class IntegrationEventsStore {
  private events: IntegrationEvent<unknown>[] = [];

  public addEvent(event: IntegrationEvent<unknown>): void {
    this.events.push(event);
  }

  public getEvents(): IntegrationEvent<unknown>[] {
    return [...this.events];
  }
}
