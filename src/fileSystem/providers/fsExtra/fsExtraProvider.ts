import { Provider } from '@nestjs/common';

import { fsExtraFactory } from './fsExtraFactory';

export const FS_EXTRA = Symbol('FS_EXTRA');

export const fsExtraProvider: Provider = {
  provide: FS_EXTRA,
  useFactory: fsExtraFactory,
};
