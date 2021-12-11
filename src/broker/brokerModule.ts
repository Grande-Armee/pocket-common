import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { DynamicModule, Module } from '@nestjs/common';

import { ClsModule } from '../cls/clsModule';
import { DtoModule } from '../dto/dtoModule';
import { UuidModule } from '../uuid/uuidModule';
import {
  CollectionResourceTransporter,
  CollectionTransporter,
  ResourceTransporter,
  TagTransporter,
  UserResourceTagTransporter,
  UserResourceTransporter,
  UserTransporter,
} from './domain';
import { BrokerInterceptor } from './interceptors';
import { BrokerService } from './services/broker/brokerService';
import { BrokerConfig } from './types';

@Module({})
export class BrokerModule {
  public static forRoot(config: BrokerConfig): DynamicModule {
    const { uri } = config;

    return {
      module: BrokerModule,
      imports: [
        DtoModule,
        ClsModule,
        UuidModule,
        RabbitMQModule.forRoot(RabbitMQModule, {
          exchanges: [
            {
              name: 'pocketExchange',
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
