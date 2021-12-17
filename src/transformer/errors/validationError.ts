import { ClassConstructor } from 'class-transformer';

export class ValidationError<T> extends Error {
  public readonly validationErrors: any[] = [];
  public readonly Constructor: ClassConstructor<T>;

  public constructor(DtoConstructor: ClassConstructor<T>, validationErrors: any[]) {
    super(`Error while validating object (${DtoConstructor?.name}): ${JSON.stringify(validationErrors)}.`);

    this.validationErrors = validationErrors;
    this.Constructor = DtoConstructor;
  }
}
