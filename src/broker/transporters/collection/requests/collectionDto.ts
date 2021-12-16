import { Type } from 'class-transformer';
import { IsDate, IsString, IsUUID, ValidateNested } from 'class-validator';

import { AllowNull } from '../../../../dto/decorators';
import { ResourceDto } from '../../resource/requests/resourceDto';

export class CollectionDto {
  @IsUUID('4')
  public id: string;

  @IsDate()
  public createdAt: Date;

  @IsDate()
  public updatedAt: Date;

  @IsString()
  @AllowNull()
  public readonly title: string | null;

  @IsString()
  @AllowNull()
  public readonly thumbnailUrl: string | null;

  @IsString()
  @AllowNull()
  public readonly content: string | null;

  @IsUUID('4')
  public readonly userId: string;

  @AllowNull()
  @Type(() => ResourceDto)
  @ValidateNested()
  public readonly resources: ResourceDto[] | null;
}
