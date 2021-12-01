import * as uuid from 'uuid';

import { Uuid } from './types';

export const uuidFactory = async (): Promise<Uuid> => uuid;
