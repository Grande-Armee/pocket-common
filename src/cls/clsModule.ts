import { Module } from '@nestjs/common';

import { clsNamespaceProvider } from './providers/clsNamespace';
import { ClsContextService } from './services/clsContext/clsContextService';

@Module({
  providers: [clsNamespaceProvider, ClsContextService],
  exports: [ClsContextService],
})
export class ClsModule {}
