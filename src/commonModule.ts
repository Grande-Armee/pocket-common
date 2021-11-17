import { Module } from '@nestjs/common';

import { ClsModule } from './cls/clsModule';
import { ConfigModule } from './config/configModule';
import { DomainEventsDispatcherModule } from './domainEventsDispatcher/domainEventsDispatcherModule';
import { DtoModule } from './dto/dtoModule';
import { EnvModule } from './env/envModule';
import { FileSystemModule } from './fileSystem/fileSystemModule';
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
    DomainEventsDispatcherModule,
  ],
  exports: [
    FileSystemModule,
    EnvModule,
    ConfigModule,
    ValidatorModule,
    LoggerModule,
    ClsModule,
    DtoModule,
    DomainEventsDispatcherModule,
  ],
})
export class CommonModule {}
