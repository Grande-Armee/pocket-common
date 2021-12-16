import { DomainError } from '../../shared';

type ErrorContext = {
  readonly id: string;
};

export class TagNotFoundError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(`Tag not found.`, context);
  }
}
