import { Provider } from '@nestjs/common';

import { dotenvFactory } from './dotenvFactory';

export const DOTENV = Symbol('DOTENV');

export const dotenvProvider: Provider = {
  provide: DOTENV,
  useFactory: dotenvFactory,
};
