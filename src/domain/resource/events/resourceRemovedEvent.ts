import { IntegrationEvent } from '../../shared';

export interface ResourceRemovedEventPayload {
  readonly id: string;
}

export class ResourceRemovedEvent extends IntegrationEvent<ResourceRemovedEventPayload> {
  public readonly name = 'pocket.resources.resources.resourceRemoved';
}
