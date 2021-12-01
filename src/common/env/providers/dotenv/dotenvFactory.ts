import dotenv from 'dotenv';

import { Dotenv } from './types';

export const dotenvFactory = async (): Promise<Dotenv> => dotenv;
