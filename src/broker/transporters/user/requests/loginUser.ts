import { IsString } from 'class-validator';

import { Transformer } from '../../../../transformer';

export class LoginUserPayloadDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  public static readonly create = Transformer.createInstanceFactory(LoginUserPayloadDto);
}

export class LoginUserResponseDto {
  @IsString()
  public readonly token: string;

  public static readonly create = Transformer.createInstanceFactory(LoginUserResponseDto);
}
