import { DomainError } from '../../shared';

type ErrorContext = {
  readonly id: string;
};

export class CollectionNotFoundError extends DomainError<ErrorContext> {
  public readonly name: 'CollectionNotFound';

  public constructor(context: ErrorContext) {
    super(`Collection not found.`, context);
  }
}
