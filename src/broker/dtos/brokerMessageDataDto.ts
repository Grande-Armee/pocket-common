import { IsString, IsObject, IsNumber } from 'class-validator';

export class BrokerMessageDataDto {
  @IsString()
  public readonly id: string;

  @IsNumber()
  public readonly timestamp: number;

  @IsObject()
  public readonly payload: any;
}
