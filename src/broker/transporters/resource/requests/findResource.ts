import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { ResourceDto } from './resource';

export class FindResourcePayloadDto {
  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(FindResourcePayloadDto);
}

export class FindResourceResponseDto {
  @Type(() => ResourceDto)
  @ValidateNested()
  public readonly resource: ResourceDto;

  public static readonly create = Transformer.createInstanceFactory(FindResourceResponseDto);
}
