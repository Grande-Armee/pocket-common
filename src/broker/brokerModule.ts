import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { DynamicModule, Module } from '@nestjs/common';

import { ClsModule } from '../cls/clsModule';
import { UuidModule } from '../uuid/uuidModule';
import { BrokerExchange } from './brokerExchange';
import { BrokerInterceptor } from './interceptors';
import { BrokerService } from './services/broker/brokerService';
import {
  CollectionResourceTransporter,
  CollectionTransporter,
  ResourceTransporter,
  TagTransporter,
  UserResourceTagTransporter,
  UserResourceTransporter,
  UserTransporter,
} from './transporters';
import { BrokerConfig } from './types';

@Module({})
export class BrokerModule {
  public static forRoot(config: BrokerConfig): DynamicModule {
    const { uri } = config;

    return {
      module: BrokerModule,
      imports: [
        ClsModule,
        UuidModule,
        RabbitMQModule.forRoot(RabbitMQModule, {
          exchanges: [
            {
              name: BrokerExchange.rpc,
              type: 'topic',
            },
            {
              name: BrokerExchange.events,
              type: 'topic',
            },
          ],
          uri,
          connectionInitOptions: { wait: false },
        }),
      ],
      providers: [
        BrokerInterceptor,
        BrokerService,
        CollectionResourceTransporter,
        CollectionTransporter,
        ResourceTransporter,
        TagTransporter,
        UserResourceTagTransporter,
        UserResourceTransporter,
        UserTransporter,
      ],
      exports: [
        BrokerInterceptor,
        BrokerService,
        CollectionResourceTransporter,
        CollectionTransporter,
        ResourceTransporter,
        TagTransporter,
        UserResourceTagTransporter,
        UserResourceTransporter,
        UserTransporter,
      ],
    };
  }
}
