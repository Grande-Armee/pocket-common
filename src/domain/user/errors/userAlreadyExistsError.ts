import { DomainError } from '../../shared';

type ErrorContext = {
  readonly email: string;
};

export class UserAlreadyExistsError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(`User with provided email already exists.`, context);
  }
}