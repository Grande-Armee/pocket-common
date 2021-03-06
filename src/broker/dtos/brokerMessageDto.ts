import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { Transformer } from '../../transformer';
import { BrokerMessageContextDto } from './brokerMessageContextDto';
import { BrokerMessageDataDto } from './brokerMessageDataDto';

export class BrokerMessageDto {
  @Type(() => BrokerMessageDataDto)
  @ValidateNested()
  public readonly data: BrokerMessageDataDto;

  @Type(() => BrokerMessageContextDto)
  @ValidateNested()
  public readonly context: BrokerMessageContextDto;

  public static readonly create = Transformer.createInstanceFactory(BrokerMessageDto);
}
