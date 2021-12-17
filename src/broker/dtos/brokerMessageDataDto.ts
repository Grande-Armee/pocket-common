import { IsString, IsObject, IsNumber } from 'class-validator';

import { Transformer } from '../../transformer';

export class BrokerMessageDataDto {
  @IsString()
  public readonly id: string;

  @IsNumber()
  public readonly timestamp: number;

  @IsObject()
  public readonly payload: any;

  public static readonly create = Transformer.createInstanceFactory(BrokerMessageDataDto);
}
