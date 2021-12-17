import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import {
  CreateTagPayloadDto,
  CreateTagResponseDto,
  FindTagPayloadDto,
  FindTagResponseDto,
  RemoveTagPayloadDto,
  UpdateTagPayloadDto,
  UpdateTagResponseDto,
} from './requests';
import { TagRoutingKey } from './tagRoutingKey';

@Injectable()
export class TagTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createTag(payload: CreateTagPayloadDto): Promise<CreateTagResponseDto> {
    return this.brokerService.request(TagRoutingKey.createTag, payload);
  }

  public async findTag(payload: FindTagPayloadDto): Promise<FindTagResponseDto> {
    return this.brokerService.request(TagRoutingKey.findTag, payload);
  }

  public async updateTag(payload: UpdateTagPayloadDto): Promise<UpdateTagResponseDto> {
    return this.brokerService.request(TagRoutingKey.updateTag, payload);
  }

  public async removeTag(payload: RemoveTagPayloadDto): Promise<void> {
    return this.brokerService.request(TagRoutingKey.removeTag, payload);
  }
}
