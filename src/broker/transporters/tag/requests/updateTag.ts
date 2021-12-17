import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { TagDto } from './tag';

export class UpdateTagPayloadDto {
  @IsUUID('4')
  public readonly tagId: string;

  @IsString()
  @IsOptional()
  public readonly color?: string;

  @IsString()
  @IsOptional()
  public readonly title?: string;

  public static readonly create = Transformer.createInstanceFactory(UpdateTagPayloadDto);
}

export class UpdateTagResponseDto {
  @Type(() => TagDto)
  @ValidateNested()
  public readonly tag: TagDto;

  public static readonly create = Transformer.createInstanceFactory(UpdateTagResponseDto);
}
