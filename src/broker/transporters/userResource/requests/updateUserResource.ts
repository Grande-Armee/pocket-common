import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsBoolean, IsNumber, IsUUID, IsEnum } from 'class-validator';

import { UserResourceStatus } from '../../../../domain/userResource';
import { Transformer } from '../../../../transformer';
import { UserResourceDto } from './userResource';

export class UpdateUserResourcePayloadDto {
  @IsUUID('4')
  public readonly userId: string;

  @IsUUID('4')
  public readonly resourceId: string;

  @IsOptional()
  @IsEnum(UserResourceStatus)
  public readonly status?: UserResourceStatus;

  @IsOptional()
  @IsBoolean()
  public readonly isFavorite?: boolean;

  @IsOptional()
  @IsNumber()
  public readonly rating?: number;

  public static readonly create = Transformer.createInstanceFactory(UpdateUserResourcePayloadDto);
}

export class UpdateUserResourceResponseDto {
  @Type(() => UserResourceDto)
  @ValidateNested()
  public readonly userResource: UserResourceDto;

  public static readonly create = Transformer.createInstanceFactory(UpdateUserResourceResponseDto);
}
