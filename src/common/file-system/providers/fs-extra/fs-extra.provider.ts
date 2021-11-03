import { Provider } from '@nestjs/common';

import { fsExtraFactory } from './fs-extra.factory';

export const FS_EXTRA = Symbol('FS_EXTRA');

export const fsExtraProvider: Provider = {
  provide: FS_EXTRA,
  useFactory: fsExtraFactory,
};
