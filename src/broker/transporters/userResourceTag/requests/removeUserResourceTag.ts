import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveUserResourceTagPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  @IsUUID('4')
  public readonly tagId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveUserResourceTagPayloadDto);
}
