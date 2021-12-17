import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import {
  CreateUserResourceTagPayloadDto,
  CreateUserResourceTagResponseDto,
  RemoveUserResourceTagPayloadDto,
} from './requests';
import { UserResourceTagRoutingKey } from './userResourceTagRoutingKey';

@Injectable()
export class UserResourceTagTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createUserResourceTag(
    payload: CreateUserResourceTagPayloadDto,
  ): Promise<CreateUserResourceTagResponseDto> {
    return this.brokerService.request(UserResourceTagRoutingKey.createUserResourceTag, payload);
  }

  public async removeUserResourceTag(payload: RemoveUserResourceTagPayloadDto): Promise<void> {
    return this.brokerService.request(UserResourceTagRoutingKey.removeUserResourceTag, payload);
  }
}
