import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { CollectionDto } from './collection';

export class FindCollectionPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly collectionId: string;

  public static readonly create = Transformer.createInstanceFactory(FindCollectionPayloadDto);
}

export class FindCollectionResponseDto {
  @Type(() => CollectionDto)
  @ValidateNested()
  public readonly collection: CollectionDto;

  public static readonly create = Transformer.createInstanceFactory(FindCollectionResponseDto);
}
