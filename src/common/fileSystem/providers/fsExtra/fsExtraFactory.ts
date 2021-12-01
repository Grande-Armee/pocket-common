import fs from 'fs-extra';

import { FsExtra } from './types';

export const fsExtraFactory = async (): Promise<FsExtra> => fs;
