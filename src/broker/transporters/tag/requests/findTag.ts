import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { TagDto } from './tag';

export class FindTagPayloadDto {
  @IsUUID('4')
  public readonly tagId: string;

  public static readonly create = Transformer.createInstanceFactory(FindTagPayloadDto);
}

export class FindTagResponseDto {
  @Type(() => TagDto)
  @ValidateNested()
  public readonly tag: TagDto;

  public static readonly create = Transformer.createInstanceFactory(FindTagResponseDto);
}
