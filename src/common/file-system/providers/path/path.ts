import { Provider } from '@nestjs/common';
import path from 'path';

import { PATH_TOKEN } from './constants';
import { Path } from './interfaces/path';

export const pathFactory = async (): Promise<Path> => path;

export const pathProvider: Provider = {
  provide: PATH_TOKEN,
  useFactory: pathFactory,
};
