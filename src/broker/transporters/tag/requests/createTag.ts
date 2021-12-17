import { Type } from 'class-transformer';
import { IsString, ValidateNested, IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { TagDto } from './tag';

export class CreateTagPayloadDto {
  @IsString()
  public readonly color: string;

  @IsString()
  public readonly title: string;

  @IsUUID('4')
  public readonly userId: string;

  public static readonly create = Transformer.createInstanceFactory(CreateTagPayloadDto);
}

export class CreateTagResponseDto {
  @Type(() => TagDto)
  @ValidateNested()
  public readonly tag: TagDto;

  public static readonly create = Transformer.createInstanceFactory(CreateTagResponseDto);
}
