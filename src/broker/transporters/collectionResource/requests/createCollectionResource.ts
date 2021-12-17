import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { CollectionResourceDto } from './collectionResource';

export class CreateCollectionResourcePayloadDto {
  @IsUUID('4')
  public readonly collectionId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(CreateCollectionResourcePayloadDto);
}

export class CreateCollectionResourceResponseDto {
  @Type(() => CollectionResourceDto)
  @ValidateNested()
  public readonly collectionResource: CollectionResourceDto;

  public static readonly create = Transformer.createInstanceFactory(CreateCollectionResourceResponseDto);
}
