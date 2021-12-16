import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsBoolean, IsNumber, IsUUID, IsEnum } from 'class-validator';

import { UserResourceStatus } from '../../../../domain/userResource';
import { UserResourceDto } from './userResourceDto';

export class UpdateUserResourcePayloadDto {
  @IsUUID('4')
  public userId: string;

  @IsUUID('4')
  public resourceId: string;

  @IsOptional()
  @IsEnum(UserResourceStatus)
  public status?: UserResourceStatus;

  @IsOptional()
  @IsBoolean()
  public isFavorite?: boolean;

  @IsOptional()
  @IsNumber()
  public rating?: number;
}

export class UpdateUserResourceResponseDto {
  @Type(() => UserResourceDto)
  @ValidateNested()
  public userResource: UserResourceDto;
}
