import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { CollectionDto } from './collection';

export class UpdateCollectionPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly collectionId: string;

  @IsOptional()
  @IsString()
  public readonly title?: string;

  @IsOptional()
  @IsString()
  public readonly content?: string;

  @IsOptional()
  @IsString()
  public readonly thumbnailUrl?: string;

  public static readonly create = Transformer.createInstanceFactory(UpdateCollectionPayloadDto);
}

export class UpdateCollectionResponseDto {
  @Type(() => CollectionDto)
  @ValidateNested()
  public readonly collection: CollectionDto;

  public static readonly create = Transformer.createInstanceFactory(UpdateCollectionResponseDto);
}
