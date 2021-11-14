import { Provider } from '@nestjs/common';

import { joiFactory } from './joiFactory';

export const JOI = Symbol('JOI');

export const joiProvider: Provider = {
  provide: JOI,
  useFactory: joiFactory,
};
