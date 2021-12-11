export abstract class IntegrationEvent<Payload> {
  public readonly payload: Payload;
  public readonly id: string;
  public readonly timestamp: number;

  public constructor(payload: Payload, id: string, timestamp: number) {
    this.payload = payload;
    this.id = id;
    this.timestamp = timestamp;
  }

  public abstract readonly name: string;
  public abstract readonly routingKey: string;
}
