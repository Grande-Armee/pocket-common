import { Provider } from '@nestjs/common';

import { uuidFactory } from './uuidFactory';

export const UUID = Symbol('UUID');

export const uuidProvider: Provider = {
  provide: UUID,
  useFactory: uuidFactory,
};
