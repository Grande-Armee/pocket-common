import joi from 'joi';

import { Joi } from './types';

export const joiFactory = async (): Promise<Joi> => joi;
