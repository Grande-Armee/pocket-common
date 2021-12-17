import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import { CollectionResourceRoutingKey } from './collectionResourceRoutingKey';
import {
  CreateCollectionResourcePayloadDto,
  CreateCollectionResourceResponseDto,
  RemoveCollectionResourcePayloadDto,
} from './requests';

@Injectable()
export class CollectionResourceTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createCollectionResource(
    payload: CreateCollectionResourcePayloadDto,
  ): Promise<CreateCollectionResourceResponseDto> {
    return this.brokerService.request(CollectionResourceRoutingKey.createCollectionResource, payload);
  }

  public async removeCollectionResource(payload: RemoveCollectionResourcePayloadDto): Promise<void> {
    return this.brokerService.request(CollectionResourceRoutingKey.removeCollectionResource, payload);
  }
}
