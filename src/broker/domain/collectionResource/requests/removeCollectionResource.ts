import { IsUUID } from 'class-validator';

export class RemoveCollectionResourcePayloadDto {
  @IsUUID('4')
  public collectionId: string;

  @IsUUID('4')
  public resourceId: string;
}
