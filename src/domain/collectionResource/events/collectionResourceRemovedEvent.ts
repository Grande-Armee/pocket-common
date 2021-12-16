import { IntegrationEvent } from '../../shared';

export interface CollectionResourceRemovedEventPayload {
  readonly id: string;
}

export class CollectionResourceRemovedEvent extends IntegrationEvent<CollectionResourceRemovedEventPayload> {
  public readonly name = 'pocket.resources.collectionResources.collectionResourceRemoved';
}
