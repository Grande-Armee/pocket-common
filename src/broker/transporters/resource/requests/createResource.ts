import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { ResourceDto } from './resource';

export class CreateResourcePayloadDto {
  @IsString()
  public readonly url: string;

  public static readonly create = Transformer.createInstanceFactory(CreateResourcePayloadDto);
}

export class CreateResourceResponseDto {
  @Type(() => ResourceDto)
  @ValidateNested()
  public readonly resource: ResourceDto;

  public static readonly create = Transformer.createInstanceFactory(CreateResourceResponseDto);
}
