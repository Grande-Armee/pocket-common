import { IsDate, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class CollectionResourceDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsUUID('4')
  public readonly collectionId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(CollectionResourceDto);
}
