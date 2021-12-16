import { IntegrationEvent } from '../../shared';

export interface UserResourceTagRemovedEventPayload {
  readonly id: string;
}

export class UserResourceTagRemovedEvent extends IntegrationEvent<UserResourceTagRemovedEventPayload> {
  public readonly name = 'pocket.resources.userResourceTags.userResourceTagRemoved';
}
