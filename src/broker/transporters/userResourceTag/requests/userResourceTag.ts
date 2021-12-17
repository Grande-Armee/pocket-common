import { IsDate, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class UserResourceTagDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  @IsUUID('4')
  public readonly tagId: string;

  public static readonly create = Transformer.createInstanceFactory(UserResourceTagDto);
}
