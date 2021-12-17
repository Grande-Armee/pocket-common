import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveResourcePayloadDto {
  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveResourcePayloadDto);
}
