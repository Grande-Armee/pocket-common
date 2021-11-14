import dotenv from 'dotenv';

import { Dotenv } from './interfaces';

export const dotenvFactory = async (): Promise<Dotenv> => dotenv;
