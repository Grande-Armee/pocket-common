import { IsString, IsObject } from 'class-validator';

export class BrokerMessageDataDto {
  @IsString()
  public readonly id: string;

  @IsString()
  public readonly timestamp: string;

  @IsObject()
  public readonly payload: any;
}
