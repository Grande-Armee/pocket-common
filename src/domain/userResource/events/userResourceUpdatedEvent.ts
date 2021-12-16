import { IntegrationEvent } from '../../shared';
import { UserResourceStatus } from '../types';

export interface UserResourceUpdatedEventPayload {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly status: UserResourceStatus;
  readonly isFavorite: boolean;
  readonly rating: number | null;
  readonly resourceId: string;
  readonly userId: string;
}

export class UserResourceUpdatedEvent extends IntegrationEvent<UserResourceUpdatedEventPayload> {
  public readonly name = 'pocket.resources.userResources.userResourceUpdated';
}
