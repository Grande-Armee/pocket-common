import { Type } from 'class-transformer';
import { IsEnum, IsString, ValidateNested } from 'class-validator';

import { UserLanguage } from '../../../../domain/user';
import { UserDto } from './userDto';

export class CreateUserPayloadDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  @IsEnum(UserLanguage)
  public readonly language: UserLanguage;
}

export class CreateUserResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;
}
