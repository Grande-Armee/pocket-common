import { Type } from 'class-transformer';
import { IsEnum, IsUUID, ValidateNested } from 'class-validator';

import { UserLanguage } from '../types';
import { UserDto } from './userDto';

export class UpdateUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsEnum(UserLanguage)
  public readonly language: UserLanguage;
}

export class UpdateUserResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;
}
