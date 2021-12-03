import { ClassConstructor } from 'class-transformer';

export class ValidationError<Dto> extends Error {
  public readonly validationErrors: any[] = [];
  public readonly DtoConstructor: ClassConstructor<Dto>;

  public constructor(DtoConstructor: ClassConstructor<Dto>, validationErrors: any[]) {
    super(`Error while validating dto (${DtoConstructor?.name}): ${JSON.stringify(validationErrors)}.`);

    this.validationErrors = validationErrors;
    this.DtoConstructor = DtoConstructor;
  }
}
