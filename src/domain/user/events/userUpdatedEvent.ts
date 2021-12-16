import { IntegrationEvent } from '../../shared';
import { UserLanguage, UserRole } from '../types';

export interface UserUpdatedEventPayload {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly email: string;
  readonly role: UserRole;
  readonly language: UserLanguage;
}

export class UserUpdatedEvent extends IntegrationEvent<UserUpdatedEventPayload> {
  public readonly name = 'pocket.users.users.userUpdated';
}
