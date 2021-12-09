import { Inject, Injectable } from '@nestjs/common';

import { Json, JSON } from '../../providers/json';

@Injectable()
export class JsonService {
  public constructor(@Inject(JSON) private readonly json: Json) {}

  public parse<T>(value: string): T {
    return this.json.parse(value);
  }

  public stringify(value: any): string {
    return this.json.stringify(value);
  }
}
