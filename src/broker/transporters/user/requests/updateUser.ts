import { Type } from 'class-transformer';
import { IsEnum, IsUUID, ValidateNested } from 'class-validator';

import { UserLanguage } from '../../../../domain/user';
import { Transformer } from '../../../../transformer';
import { UserDto } from './user';

export class UpdateUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsEnum(UserLanguage)
  public readonly language: UserLanguage;

  public static readonly create = Transformer.createInstanceFactory(UpdateUserPayloadDto);
}

export class UpdateUserResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;

  public static readonly create = Transformer.createInstanceFactory(UpdateUserResponseDto);
}
