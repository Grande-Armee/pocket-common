import { IsDate, IsString } from 'class-validator';

import { AllowNull, Transformer } from '../../../../transformer';

export class ResourceDto {
  @IsString()
  public readonly id: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsDate()
  public readonly updatedAt: Date;

  @IsString()
  public readonly url: string;

  @IsString()
  @AllowNull()
  public readonly title: string | null;

  @IsString()
  @AllowNull()
  public readonly thumbnailUrl: string | null;

  @IsString()
  @AllowNull()
  public readonly content: string | null;

  public static readonly create = Transformer.createInstanceFactory(ResourceDto);
}
