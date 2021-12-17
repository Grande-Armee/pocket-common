import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';

import { Transformer } from '../../../../transformer';
import { UserResourceTagDto } from './userResourceTag';

export class CreateUserResourceTagPayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  @IsUUID('4')
  public readonly tagId: string;

  public static readonly create = Transformer.createInstanceFactory(CreateUserResourceTagPayloadDto);
}

export class CreateUserResourceTagResponseDto {
  @Type(() => UserResourceTagDto)
  @ValidateNested()
  public readonly userResourceTag: UserResourceTagDto;

  public static readonly create = Transformer.createInstanceFactory(CreateUserResourceTagResponseDto);
}
