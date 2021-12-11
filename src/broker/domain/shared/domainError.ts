export class DomainError<Context> extends Error {
  public readonly context: Context;

  public constructor(message: string, context: Context) {
    super(message);

    this.context = context;
  }
}
