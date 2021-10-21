import { Module } from '@nestjs/common';

import { clsNamespaceProvider } from './providers/cls-namespace/cls-namespace';
import { ClsContextService } from './services/cls-context/cls-context';

@Module({
  providers: [clsNamespaceProvider, ClsContextService],
  exports: [ClsContextService],
})
export class ClsModule {}
