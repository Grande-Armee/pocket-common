import { DomainError } from '../../shared';

type ErrorContext = {
  readonly url: string;
};

export class ResourceAlreadyExistsError extends DomainError<ErrorContext> {
  public readonly name: 'ResourceAlreadyExists';

  public constructor(context: ErrorContext) {
    super(`Resource already exists.`, context);
  }
}
