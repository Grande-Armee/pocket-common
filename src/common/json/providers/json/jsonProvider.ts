import { Provider } from '@nestjs/common';

import { jsonFactory } from './jsonFactory';

export const JSON = Symbol('JSON');

export const jsonProvider: Provider = {
  provide: JSON,
  useFactory: jsonFactory,
};
