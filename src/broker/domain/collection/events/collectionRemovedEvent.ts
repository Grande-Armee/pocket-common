import { IntegrationEvent } from '../../../../integrationEventsStore/providers/integrationEventsStoreFactory';

export interface CollectionRemovedEventPayload {
  readonly id: string;
}

export class CollectionRemovedEvent extends IntegrationEvent<CollectionRemovedEventPayload> {
  public readonly name = 'pocket.resources.collections.collectionRemoved';
}
