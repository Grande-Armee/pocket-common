import { Module } from '@nestjs/common';

import { uuidProvider } from './providers/uuid';
import { UuidService } from './services/uuid/uuidService';

@Module({
  providers: [uuidProvider, UuidService],
  exports: [UuidService],
})
export class UuidModule {}
