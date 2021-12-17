import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveUserResourcePayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveUserResourcePayloadDto);
}
