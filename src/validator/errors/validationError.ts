export class ValidationError<T> extends Error {
  public readonly validationErrors: any[] = [];
  public readonly target: T;

  public constructor(target: T, validationErrors: any[]) {
    super(`Error while validating object: ${JSON.stringify(validationErrors)}.`);

    this.validationErrors = validationErrors;
    this.target = target;
  }
}
