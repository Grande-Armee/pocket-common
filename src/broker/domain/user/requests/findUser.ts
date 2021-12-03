import { IsUUID } from 'class-validator';

import { UserDto } from './userDto';

export class FindUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;
}

export class FindUserResponseDto {
  public readonly user: UserDto;
}
