import { IsNumber, IsString } from 'class-validator';

import { Transformer } from '../../transformer';

export class BrokerMessageContextDto {
  @IsString()
  public readonly traceId: string;

  @IsNumber()
  public readonly timestamp: number;

  public static readonly create = Transformer.createInstanceFactory(BrokerMessageContextDto);
}
