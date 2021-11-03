import { Provider } from '@nestjs/common';

import { dotenvFactory } from './dotenv.factory';

export const DOTENV = Symbol('DOTENV');

export const dotenvProvider: Provider = {
  provide: DOTENV,
  useFactory: dotenvFactory,
};
