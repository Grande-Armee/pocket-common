import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { ResourceDto } from './resource';

export class UpdateResourcePayloadDto {
  @IsUUID('4')
  public readonly resourceId: string;

  @IsOptional()
  @IsString()
  public readonly title?: string;

  @IsOptional()
  @IsString()
  public readonly content?: string;

  @IsOptional()
  @IsString()
  public readonly thumbnailUrl?: string;

  public static readonly create = Transformer.createInstanceFactory(UpdateResourcePayloadDto);
}

export class UpdateResourceResponseDto {
  @Type(() => ResourceDto)
  @ValidateNested()
  public readonly resource: ResourceDto;

  public static readonly create = Transformer.createInstanceFactory(UpdateResourceResponseDto);
}
