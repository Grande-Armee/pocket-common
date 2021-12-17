import { IsUUID } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { UserDto } from './user';

export class FindUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  public static readonly create = Transformer.createInstanceFactory(FindUserPayloadDto);
}

export class FindUserResponseDto {
  public readonly user: UserDto;

  public static readonly create = Transformer.createInstanceFactory(FindUserResponseDto);
}
