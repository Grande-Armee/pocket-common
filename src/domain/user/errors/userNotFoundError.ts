import { DomainError } from '../../shared';

type ErrorContext =
  | {
      readonly id: string;
    }
  | {
      readonly email: string;
    };

export class UserNotFoundError extends DomainError<ErrorContext> {
  public readonly name: 'UserNotFound';

  public constructor(context: ErrorContext) {
    super(`User not found.`, context);
  }
}
