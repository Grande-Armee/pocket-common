import { IntegrationEvent } from '../../shared';

export interface UserRemovedEventPayload {
  readonly id: string;
}

export class UserRemovedEvent extends IntegrationEvent<UserRemovedEventPayload> {
  public readonly name = 'pocket.users.users.userRemoved';
}
