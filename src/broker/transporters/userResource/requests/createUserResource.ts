import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { UserResourceDto } from './userResource';

export class CreateUserResourcePayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  public static readonly create = Transformer.createInstanceFactory(CreateUserResourcePayloadDto);
}

export class CreateUserResourceResponseDto {
  @Type(() => UserResourceDto)
  @ValidateNested()
  public readonly userResource: UserResourceDto;

  public static readonly create = Transformer.createInstanceFactory(CreateUserResourceResponseDto);
}
