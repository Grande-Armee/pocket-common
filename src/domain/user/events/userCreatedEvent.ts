import { IntegrationEvent } from '../../shared';
import { UserLanguage, UserRole } from '../types';

export interface UserCreatedEventPayload {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly email: string;
  readonly role: UserRole;
  readonly language: UserLanguage;
}

export class UserCreatedEvent extends IntegrationEvent<UserCreatedEventPayload> {
  public readonly name = 'pocket.users.users.userCreated';
}
