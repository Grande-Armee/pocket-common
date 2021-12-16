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
    const data = this.brokerService.createRpcData(CreateTagPayloadDto, payload);

    return this.brokerService.request(TagRoutingKey.createTag, data);
  }

  public async findTag(payload: FindTagPayloadDto): Promise<FindTagResponseDto> {
    const data = this.brokerService.createRpcData(FindTagPayloadDto, payload);

    return this.brokerService.request(TagRoutingKey.findTag, data);
  }

  public async updateTag(payload: UpdateTagPayloadDto): Promise<UpdateTagResponseDto> {
    const data = this.brokerService.createRpcData(UpdateTagPayloadDto, payload);

    return this.brokerService.request(TagRoutingKey.updateTag, data);
  }

  public async removeTag(payload: RemoveTagPayloadDto): Promise<void> {
    const data = this.brokerService.createRpcData(RemoveTagPayloadDto, payload);

    return this.brokerService.request(TagRoutingKey.removeTag, data);
  }
}
