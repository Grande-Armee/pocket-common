import { Type } from 'class-transformer';
import { IsString, IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { CollectionDto } from './collection';

export class CreateCollectionPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsString()
  public readonly title: string;

  public static readonly create = Transformer.createInstanceFactory(CreateCollectionPayloadDto);
}

export class CreateCollectionResponseDto {
  @Type(() => CollectionDto)
  @ValidateNested()
  public readonly collection: CollectionDto;

  public static readonly create = Transformer.createInstanceFactory(CreateCollectionResponseDto);
}
