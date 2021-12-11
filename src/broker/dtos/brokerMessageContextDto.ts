import { IsNumber, IsString } from 'class-validator';

export class BrokerMessageContextDto {
  @IsString()
  public readonly traceId: string;

  @IsNumber()
  public readonly timestamp: number;
}
