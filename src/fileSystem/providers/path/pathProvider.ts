import { Provider } from '@nestjs/common';

import { pathFactory } from './pathFactory';

export const PATH = Symbol('PATH');

export const pathProvider: Provider = {
  provide: PATH,
  useFactory: pathFactory,
};
