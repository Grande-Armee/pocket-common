import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class RemoveCollectionPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly collectionId: string;

  public static readonly create = Transformer.createInstanceFactory(RemoveCollectionPayloadDto);
}
