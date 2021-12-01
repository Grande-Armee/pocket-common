import { Module } from '@nestjs/common';

import { jsonProvider } from './providers/json';
import { JsonService } from './services/json/jsonService';

@Module({
  providers: [jsonProvider, JsonService],
  exports: [JsonService],
})
export class JsonModule {}
