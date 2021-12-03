import { IsBoolean, IsNotEmpty } from 'class-validator';

export class BrokerResponseDto {
  @IsBoolean()
  public success: boolean;

  @IsNotEmpty()
  public payload: any;
}
