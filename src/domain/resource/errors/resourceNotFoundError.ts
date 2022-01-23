import { DomainError } from '../../shared';

type ErrorContext = {
  readonly id: string;
};

export class ResourceNotFoundError extends DomainError<ErrorContext> {
  public readonly name: 'ResourceNotFound';

  public constructor(context: ErrorContext) {
    super(`Resource not found.`, context);
  }
}
