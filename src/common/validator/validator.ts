import { Module } from '@nestjs/common';

import { joiProvider } from './providers/joi/joi';

@Module({
  providers: [joiProvider],
  exports: [joiProvider],
})
export class ValidatorModule {}
