import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';

import { TRACE_ID_KEY } from '../../../cls/clsKeys';
import { ClsContextService } from '../../../cls/services/clsContext/clsContextService';
import { DtoFactory } from '../../../dto/providers/dtoFactory';
import { BrokerMessageDataDto, BrokerMessageDto, BrokerResponseDto } from '../../dtos';
import { BrokerMessage } from '../../types';

@Injectable()
export class BrokerService {
  public constructor(
    private readonly amqpConnection: AmqpConnection,
    private readonly dtoFactory: DtoFactory,
    private readonly clsContextService: ClsContextService,
  ) {}

  public async parseMessage<Payload>(
    PayloadDtoConstructor: ClassConstructor<Payload>,
    message: BrokerMessage,
  ): Promise<BrokerMessageDto> {
    const content = JSON.parse(message.content.toString());

    const messageDto = this.dtoFactory.create<BrokerMessageDto>(BrokerMessageDto, content);
    const payload = this.dtoFactory.create<Payload>(PayloadDtoConstructor, messageDto.data.payload);

    return this.dtoFactory.create(BrokerMessageDto, {
      ...messageDto,
      data: {
        ...messageDto.data,
        payload,
      },
    });
  }

  private createMessageDto(data: BrokerMessageDataDto): BrokerMessageDto {
    const traceId = this.clsContextService.get<string>(TRACE_ID_KEY) || '';

    return this.dtoFactory.create(BrokerMessageDto, {
      data,
      context: {
        traceId,
        timestamp: String(Date.now()),
      },
    });
  }

  public createRpcData<Payload>(
    PayloadDtoConstructor: ClassConstructor<Payload>,
    payload: Payload,
  ): BrokerMessageDataDto {
    const payloadDto = this.dtoFactory.create(PayloadDtoConstructor, payload);

    return this.dtoFactory.create(BrokerMessageDataDto, {
      id: 'id',
      timestamp: String(Date.now()),
      payload: payloadDto,
    });
  }

  public async publish(routingKey: string, data: BrokerMessageDataDto): Promise<void> {
    const messageDto = this.createMessageDto(data);

    return this.amqpConnection.publish('pocketExchange', routingKey, messageDto);
  }

  public async request<Response>(routingKey: string, data: BrokerMessageDataDto): Promise<Response> {
    const messageDto = this.createMessageDto(data);

    const response = await this.amqpConnection.request<BrokerResponseDto>({
      exchange: 'pocketExchange',
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
