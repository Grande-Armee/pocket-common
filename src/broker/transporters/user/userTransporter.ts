import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import {
  CreateUserPayloadDto,
  CreateUserResponseDto,
  FindUserPayloadDto,
  FindUserResponseDto,
  LoginUserPayloadDto,
  LoginUserResponseDto,
  RemoveUserPayloadDto,
  SetNewPasswordPayloadDto,
  SetNewPasswordResponseDto,
  UpdateUserPayloadDto,
  UpdateUserResponseDto,
} from './requests';
import { UserRoutingKey } from './userRoutingKey';

@Injectable()
export class UserTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createUser(payload: CreateUserPayloadDto): Promise<CreateUserResponseDto> {
    return this.brokerService.request(UserRoutingKey.createUser, payload);
  }

  public async findUser(payload: FindUserPayloadDto): Promise<FindUserResponseDto> {
    return this.brokerService.request(UserRoutingKey.findUser, payload);
  }

  public async updateUser(payload: UpdateUserPayloadDto): Promise<UpdateUserResponseDto> {
    return this.brokerService.request(UserRoutingKey.updateUser, payload);
  }

  public async removeUser(payload: RemoveUserPayloadDto): Promise<void> {
    return this.brokerService.request(UserRoutingKey.removeUser, payload);
  }

  public async loginUser(payload: LoginUserPayloadDto): Promise<LoginUserResponseDto> {
    return this.brokerService.request(UserRoutingKey.loginUser, payload);
  }

  public async setNewPassword(payload: SetNewPasswordPayloadDto): Promise<SetNewPasswordResponseDto> {
    return this.brokerService.request(UserRoutingKey.setNewPassword, payload);
  }
}
