import { Module } from '@nestjs/common';

import { joiProvider } from './providers/joi';

@Module({
  providers: [joiProvider],
  exports: [joiProvider],
})
export class ValidatorModule {}
