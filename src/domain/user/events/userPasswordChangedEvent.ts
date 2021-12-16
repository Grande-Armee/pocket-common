import { IntegrationEvent } from '../../shared';

export interface UserPasswordChangedEventPayload {
  readonly userId: string;
}

export class UserPasswordChangedEvent extends IntegrationEvent<UserPasswordChangedEventPayload> {
  public readonly name = 'pocket.users.users.userPasswordChanged';
}
