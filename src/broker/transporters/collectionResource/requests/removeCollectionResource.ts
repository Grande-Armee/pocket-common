import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveCollectionResourcePayloadDto {
  @IsUUID('4')
  public readonly collectionId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveCollectionResourcePayloadDto);
}
