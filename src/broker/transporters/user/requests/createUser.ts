import { Type } from 'class-transformer';
import { IsEnum, IsString, ValidateNested } from 'class-validator';

import { UserLanguage } from '../../../../domain/user';
import { Transformer } from '../../../../transformer';
import { UserDto } from './user';

export class CreateUserPayloadDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  @IsEnum(UserLanguage)
  public readonly language: UserLanguage;

  public static readonly create = Transformer.createInstanceFactory(CreateUserPayloadDto);
}

export class CreateUserResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;

  public static readonly create = Transformer.createInstanceFactory(CreateUserResponseDto);
}
