import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveTagPayloadDto {
  @IsUUID('4')
  public readonly tagId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveTagPayloadDto);
}
