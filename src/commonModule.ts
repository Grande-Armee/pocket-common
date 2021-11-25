import { Module } from '@nestjs/common';

import { ClsModule } from './cls/clsModule';
import { ConfigModule } from './config/configModule';
import { DtoModule } from './dto/dtoModule';
import { EnvModule } from './env/envModule';
import { FileSystemModule } from './fileSystem/fileSystemModule';
import { IntegrationEventsDispatcherModule } from './integrationEventsDispatcher/integrationEventsDispatcherModule';
import { LoggerModule } from './logger/loggerModule';
import { ValidatorModule } from './validator/validatorModule';

@Module({
  imports: [
    FileSystemModule,
    EnvModule,
    ConfigModule,
    ValidatorModule,
    LoggerModule,
    ClsModule,
    DtoModule,
    IntegrationEventsDispatcherModule,
  ],
  exports: [
    FileSystemModule,
    EnvModule,
    ConfigModule,
    ValidatorModule,
    LoggerModule,
    ClsModule,
    DtoModule,
    IntegrationEventsDispatcherModule,
  ],
})
export class CommonModule {}
