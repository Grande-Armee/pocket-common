import { IntegrationEvent } from '../../../../integrationEventsStore/providers/integrationEventsStoreFactory';

export interface CollectionUpdatedEventPayload {
  readonly id: string;
}

export class CollectionUpdatedEvent extends IntegrationEvent<CollectionUpdatedEventPayload> {
  public readonly name = 'pocket.resources.collections.collectionUpdated';
}
