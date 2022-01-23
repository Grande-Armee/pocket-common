import { DomainError } from '../../shared';

type ErrorContext =
  | {
      readonly id: string;
    }
  | {
      readonly userId: string;
      readonly resourceId: string;
      readonly tagId: string;
    };

export class UserResourceTagNotFoundError extends DomainError<ErrorContext> {
  public readonly name: 'UserResourceTagNotFound';

  public constructor(context: ErrorContext) {
    super(`UserResourceTag not found.`, context);
  }
}
