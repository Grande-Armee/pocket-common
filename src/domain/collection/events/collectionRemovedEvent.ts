import { IntegrationEvent } from '../../shared';

export interface CollectionRemovedEventPayload {
  readonly id: string;
}

export class CollectionRemovedEvent extends IntegrationEvent<CollectionRemovedEventPayload> {
  public readonly name = 'pocket.resources.collections.collectionRemoved';
}
