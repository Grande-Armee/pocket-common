import { Inject, Injectable } from '@nestjs/common';

import { UUID, Uuid } from '../../providers/uuid';

@Injectable()
export class UuidService {
  public constructor(@Inject(UUID) private readonly uuid: Uuid) {}

  public generateUuidV4(): string {
    return this.uuid.v4();
  }
}
