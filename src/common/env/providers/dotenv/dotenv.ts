import { Provider } from '@nestjs/common';
import dotenv from 'dotenv';

import { DOTENV_TOKEN } from './constants';
import { Dotenv } from './interfaces/dotenv';

export const dotenvFactory = async (): Promise<Dotenv> => dotenv;

export const dotenvProvider: Provider = {
  provide: DOTENV_TOKEN,
  useFactory: dotenvFactory,
};
