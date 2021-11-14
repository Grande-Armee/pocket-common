import fs from 'fs-extra';

import { FsExtra } from './interfaces';

export const fsExtraFactory = async (): Promise<FsExtra> => fs;
