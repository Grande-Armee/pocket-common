import { DomainError } from '../../shared';

type ErrorContext = {
  readonly id: string;
};

export class CollectionNotFoundError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(CollectionNotFoundError.name, `Collection not found.`, context);
  }
}
