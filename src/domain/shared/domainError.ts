export abstract class DomainError<Context> extends Error {
  public abstract override readonly name: string;

  public readonly context: Context;

  public constructor(message: string, context: Context) {
    super(message);

    this.context = context;
  }
}
