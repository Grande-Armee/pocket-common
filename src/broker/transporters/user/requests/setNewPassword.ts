import { Type } from 'class-transformer';
import { IsString, IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { UserDto } from './user';

export class SetNewPasswordPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsString()
  public readonly newPassword: string;

  public static readonly create = Transformer.createInstanceFactory(SetNewPasswordPayloadDto);
}

export class SetNewPasswordResponseDto {
  @Type(() => UserDto)
  @ValidateNested()
  public readonly user: UserDto;

  public static readonly create = Transformer.createInstanceFactory(SetNewPasswordResponseDto);
}
