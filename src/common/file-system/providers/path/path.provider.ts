import { Provider } from '@nestjs/common';

import { pathFactory } from './path.factory';

export const PATH = Symbol('PATH');

export const pathProvider: Provider = {
  provide: PATH,
  useFactory: pathFactory,
};
