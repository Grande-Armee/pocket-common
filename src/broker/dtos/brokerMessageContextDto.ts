import { IsString } from 'class-validator';

export class BrokerMessageContextDto {
  @IsString()
  public readonly traceId: string;

  @IsString()
  public readonly timestamp: string;
}
