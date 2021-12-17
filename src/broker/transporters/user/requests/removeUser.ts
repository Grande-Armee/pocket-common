import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveUserPayloadDto);
}
