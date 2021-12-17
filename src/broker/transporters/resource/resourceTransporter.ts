import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import {
  CreateResourcePayloadDto,
  CreateResourceResponseDto,
  FindResourcePayloadDto,
  FindResourceResponseDto,
  RemoveResourcePayloadDto,
  UpdateResourcePayloadDto,
  UpdateResourceResponseDto,
} from './requests';
import { ResourceRoutingKey } from './resourceRoutingKey';

@Injectable()
export class ResourceTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createResource(payload: CreateResourcePayloadDto): Promise<CreateResourceResponseDto> {
    return this.brokerService.request(ResourceRoutingKey.createResource, payload);
  }

  public async findResource(payload: FindResourcePayloadDto): Promise<FindResourceResponseDto> {
    return this.brokerService.request(ResourceRoutingKey.findResource, payload);
  }

  public async updateResource(payload: UpdateResourcePayloadDto): Promise<UpdateResourceResponseDto> {
    return this.brokerService.request(ResourceRoutingKey.updateResource, payload);
  }

  public async removeResource(payload: RemoveResourcePayloadDto): Promise<void> {
    return this.brokerService.request(ResourceRoutingKey.removeResource, payload);
  }
}
