export class BrokerError extends Error {
  public readonly details: any;

  public constructor(name: string, message: string, stack: string, details: any) {
    super();

    this.name = name;
    this.message = message;
    this.stack = stack;
    this.details = details;
  }
}
