import { DomainError } from '../../shared';

type ErrorContext = {
  readonly url: string;
};

export class ResourceAlreadyExistsError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(ResourceAlreadyExistsError.name, `Resource already exists.`, context);
  }
}
