import { IsString } from 'class-validator';

export class LoginUserPayloadDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}

export class LoginUserResponseDto {
  @IsString()
  public readonly token: string;
}
