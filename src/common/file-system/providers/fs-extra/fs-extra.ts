import { Provider } from '@nestjs/common';
import fs from 'fs-extra';

import { FS_EXTRA_TOKEN } from './constants';
import { FsExtra } from './interfaces/fs-extra';

export const fsExtraFactory = async (): Promise<FsExtra> => fs;

export const fsExtraProvider: Provider = {
  provide: FS_EXTRA_TOKEN,
  useFactory: fsExtraFactory,
};
