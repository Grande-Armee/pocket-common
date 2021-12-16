import { v4 } from 'uuid';

export abstract class IntegrationEvent<Payload> {
  public readonly payload: Payload;
  public readonly id: string;
  public readonly timestamp: number;

  public constructor(payload: Payload) {
    this.payload = payload;
    this.id = v4();
    this.timestamp = Date.now();
  }

  public abstract readonly name: string;
}
