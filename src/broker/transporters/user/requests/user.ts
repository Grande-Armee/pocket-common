import { IsUUID, IsDate, IsString, IsEnum } from 'class-validator';

import { UserLanguage, UserRole } from '../../../../domain/user';
import { Transformer } from '../../../../transformer';

export class UserDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  @IsEnum(UserRole)
  public readonly role: UserRole;

  @IsEnum(UserLanguage)
  public readonly language: UserLanguage;

  public static readonly create = Transformer.createInstanceFactory(UserDto);
}
