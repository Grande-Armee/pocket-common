import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { CollectionResourceDto } from './collectionResourceDto';

export class CreateCollectionResourcePayloadDto {
  @IsUUID('4')
  public collectionId: string;

  @IsUUID('4')
  public resourceId: string;
}

export class CreateCollectionResourceResponseDto {
  @Type(() => CollectionResourceDto)
  @ValidateNested()
  public collectionResource: CollectionResourceDto;
}
