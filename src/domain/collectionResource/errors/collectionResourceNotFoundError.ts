import { DomainError } from '../../shared';

type ErrorContext =
  | {
      readonly id: string;
    }
  | {
      readonly collectionId: string;
      readonly resourceId: string;
    };

export class CollectionResourceNotFoundError extends DomainError<ErrorContext> {
  public constructor(context: ErrorContext) {
    super(CollectionResourceNotFoundError.name, `CollectionResource not found.`, context);
  }
}
