export abstract class IntegrationEvent<Payload> {
  public readonly payload: Payload;
  public readonly id: string;
  public readonly timestamp: Date;

  public constructor(payload: Payload, id: string, timestamp: Date) {
    this.payload = payload;
    this.id = id;
    this.timestamp = timestamp;
  }

  public abstract readonly name: string;
}
