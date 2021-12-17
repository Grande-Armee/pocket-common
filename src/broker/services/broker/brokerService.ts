import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { TRACE_ID_KEY } from '../../../cls/clsKeys';
import { ClsContextService } from '../../../cls/services/clsContext/clsContextService';
import { IntegrationEvent } from '../../../domain/shared';
import { UuidService } from '../../../uuid/services/uuid/uuidService';
import { BrokerExchange } from '../../brokerExchange';
import { BrokerMessageDataDto, BrokerMessageDto, BrokerResponseDto } from '../../dtos';
import { BrokerMessage } from '../../types';

@Injectable()
export class BrokerService {
  public constructor(
    private readonly amqpConnection: AmqpConnection,
    private readonly clsContextService: ClsContextService,
    private readonly uuidService: UuidService,
  ) {}

  public async parseMessage(message: BrokerMessage): Promise<BrokerMessageDto> {
    const content = JSON.parse(message.content.toString());

    return BrokerMessageDto.create(content);
  }

  private createMessageDto(data: BrokerMessageDataDto): BrokerMessageDto {
    const traceId = this.clsContextService.get<string>(TRACE_ID_KEY) || '';

    return BrokerMessageDto.create({
      data,
      context: {
        traceId,
        timestamp: Date.now(),
      },
    });
  }

  public async publish(routingKey: string, data: BrokerMessageDataDto): Promise<void> {
    const messageDto = this.createMessageDto(data);

    return this.amqpConnection.publish(BrokerExchange.events, routingKey, messageDto);
  }

  public async publishEvent(event: IntegrationEvent<any>): Promise<void> {
    const messageData = BrokerMessageDataDto.create(event);

    await this.publish(event.name, messageData);
  }

  public async publishEvents(events: IntegrationEvent<any>[]): Promise<void> {
    await events.reduce(async (result, event) => {
      await result;

      return this.publishEvent(event);
    }, Promise.resolve());
  }

  public async request<Payload, Response>(routingKey: string, payload: Payload): Promise<Response> {
    const data = BrokerMessageDataDto.create({
      id: this.uuidService.generateUuidV4(),
      timestamp: Date.now(),
      payload,
    });
    const messageDto = this.createMessageDto(data);

    const response = await this.amqpConnection.request<BrokerResponseDto>({
      exchange: BrokerExchange.rpc,
      routingKey,
      payload: messageDto,
      timeout: 25000,
    });

    console.log({ response });

    if (!response.success) {
      // TODO: better handling
      throw new Error('RPC failed.');
    }

    return response.payload as any as Response;
  }
}
