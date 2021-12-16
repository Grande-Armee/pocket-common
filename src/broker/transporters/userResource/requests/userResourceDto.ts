import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsUUID, ValidateNested } from 'class-validator';

import { UserResourceStatus } from '../../../../domain/userResource';
import { AllowNull } from '../../../../dto/decorators';
import { ResourceDto } from '../../resource';
import { TagDto } from '../../tag';

export class UserResourceDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsEnum(UserResourceStatus)
  public readonly status: UserResourceStatus;

  @IsBoolean()
  public readonly isFavorite: boolean;

  @AllowNull()
  @IsNumber()
  public readonly rating: number | null;

  @AllowNull()
  @Type(() => ResourceDto)
  @ValidateNested()
  public readonly resource: ResourceDto | null;

  @IsUUID('4')
  public readonly resourceId: string;

  @IsUUID('4')
  public readonly userId: string;

  @AllowNull()
  @Type(() => TagDto)
  @ValidateNested()
  public readonly tags: TagDto[] | null;
}
