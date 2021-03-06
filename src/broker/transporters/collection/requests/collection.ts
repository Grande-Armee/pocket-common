import { Type } from 'class-transformer';
import { IsDate, IsString, IsUUID, ValidateNested } from 'class-validator';

import { AllowNull, Transformer } from '../../../../transformer';
import { ResourceDto } from '../../resource/requests';

export class CollectionDto {
  @IsUUID('4')
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

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

  public static readonly create = Transformer.createInstanceFactory(CollectionDto);
}
