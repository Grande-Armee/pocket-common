import { IsBoolean, IsNotEmpty } from 'class-validator';

import { Transformer } from '../../transformer';

export class BrokerResponseDto {
  @IsBoolean()
  public readonly success: boolean;

  @IsNotEmpty()
  public readonly payload: any;

  public static readonly create = Transformer.createInstanceFactory(BrokerResponseDto);
}
