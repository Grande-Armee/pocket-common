import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import {
  CreateUserResourcePayloadDto,
  CreateUserResourceResponseDto,
  FindUserResourcePayloadDto,
  FindUserResourceResponseDto,
  RemoveUserResourcePayloadDto,
  UpdateUserResourcePayloadDto,
  UpdateUserResourceResponseDto,
} from './requests';
import { UserResourceRoutingKey } from './userResourceRoutingKey';

@Injectable()
export class UserResourceTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createUserResource(payload: CreateUserResourcePayloadDto): Promise<CreateUserResourceResponseDto> {
    return this.brokerService.request(UserResourceRoutingKey.createUserResource, payload);
  }

  public async findUserResource(payload: FindUserResourcePayloadDto): Promise<FindUserResourceResponseDto> {
    return this.brokerService.request(UserResourceRoutingKey.findUserResource, payload);
  }

  public async updateUserResource(payload: UpdateUserResourcePayloadDto): Promise<UpdateUserResourceResponseDto> {
    return this.brokerService.request(UserResourceRoutingKey.updateUserResource, payload);
  }

  public async removeUserResource(payload: RemoveUserResourcePayloadDto): Promise<void> {
    return this.brokerService.request(UserResourceRoutingKey.removeUserResource, payload);
  }
}
