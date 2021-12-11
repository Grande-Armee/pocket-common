import { IntegrationEvent } from '../../../../integrationEventsStore/providers/integrationEventsStoreFactory';

export interface CollectionCreatedEventPayload {
  readonly id: string;
}

export class CollectionCreatedEvent extends IntegrationEvent<CollectionCreatedEventPayload> {
  public readonly name = 'pocket.resources.collections.collectionCreated';
}
