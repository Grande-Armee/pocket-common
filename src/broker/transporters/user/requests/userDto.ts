import { IsUUID, IsDate, IsString, IsEnum } from 'class-validator';

import { UserLanguage, UserRole } from '../../../../domain/user';

export class UserDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsEnum(UserRole)
  public role: UserRole;

  @IsEnum(UserLanguage)
  public language: UserLanguage;
}
