import { Type } from 'class-transformer';
import { IsString, IsUUID, ValidateNested } from 'class-validator';

import { UserDto } from './userDto';

export class SetNewPasswordPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsString()
  public readonly newPassword: string;
}

export class SetNewPasswordResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;
}
