import { IsDate, IsUUID } from 'class-validator';

export class CollectionResourceDto {
  @IsUUID('4')
  public id: string;

  @IsDate()
  public createdAt: Date;

  @IsDate()
  public updatedAt: Date;

  @IsUUID('4')
  public collectionId: string;

  @IsUUID('4')
  public resourceId: string;
}
