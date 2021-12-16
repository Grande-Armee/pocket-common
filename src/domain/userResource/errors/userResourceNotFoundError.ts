import { DomainError } from '../../shared';

type ErrorContext =
  | {
      readonly id: string;
    }
  | {
      readonly userId: string;
      readonly resourceId: string;
    };

export class UserResourceNotFoundError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(`UserResource with provided params not found.`, context);
  }
}
