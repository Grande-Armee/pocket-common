import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

import { CommonModule } from '../common/commonModule';
import { UserTransporter } from './domain/user/userTransporter';
import { BrokerInterceptor } from './interceptors/brokerInterceptor';
import { BrokerConfig, brokerConfigProvider, BROKER_CONFIG } from './providers/brokerConfig';
import { BrokerService } from './services/broker/brokerService';

@Module({
  imports: [CommonModule],
  providers: [brokerConfigProvider],
  exports: [brokerConfigProvider],
})
class BrokerConfigModule {}

@Module({
  imports: [
    CommonModule,
    BrokerConfigModule,
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [BrokerConfigModule, CommonModule],
      useFactory: (brokerConfig: BrokerConfig) => {
        const { uri } = brokerConfig;

        return {
          exchanges: [
            {
              name: 'exchange1',
              type: 'topic',
            },
          ],
          uri,
          connectionInitOptions: { wait: false },
        };
      },
      inject: [BROKER_CONFIG],
    }),
  ],
  providers: [BrokerInterceptor, BrokerService, UserTransporter],
  exports: [RabbitMQModule, BrokerInterceptor, BrokerService, UserTransporter],
})
export class BrokerModule {}
