import { Injectable } from '@nestjs/common';

import { BrokerService } from '../../services/broker/brokerService';
import { CollectionRoutingKey } from './collectionRoutingKey';
import {
  CreateCollectionPayloadDto,
  CreateCollectionResponseDto,
  FindCollectionPayloadDto,
  FindCollectionResponseDto,
  RemoveCollectionPayloadDto,
  UpdateCollectionPayloadDto,
  UpdateCollectionResponseDto,
} from './requests';

@Injectable()
export class CollectionTransporter {
  public constructor(private readonly brokerService: BrokerService) {}

  public async createCollection(payload: CreateCollectionPayloadDto): Promise<CreateCollectionResponseDto> {
    return this.brokerService.request(CollectionRoutingKey.createCollection, payload);
  }

  public async findCollection(payload: FindCollectionPayloadDto): Promise<FindCollectionResponseDto> {
    return this.brokerService.request(CollectionRoutingKey.findCollection, payload);
  }

  public async updateCollection(payload: UpdateCollectionPayloadDto): Promise<UpdateCollectionResponseDto> {
    return this.brokerService.request(CollectionRoutingKey.updateCollection, payload);
  }

  public async removeCollection(payload: RemoveCollectionPayloadDto): Promise<void> {
    return this.brokerService.request(CollectionRoutingKey.removeCollection, payload);
  }
}
