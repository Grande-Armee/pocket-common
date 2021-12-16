import { IsUUID } from 'class-validator';

export class RemoveUserPayloadDto {
  @IsUUID('4')
  public readonly userId: string;
}
