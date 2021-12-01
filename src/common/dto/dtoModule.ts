import { Module } from '@nestjs/common';

import { DtoFactory } from './providers/dtoFactory';

@Module({
  providers: [DtoFactory],
  exports: [DtoFactory],
})
export class DtoModule {}
