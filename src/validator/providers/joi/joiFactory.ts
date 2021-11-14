import joi from 'joi';

import { Joi } from './interfaces';

export const joiFactory = async (): Promise<Joi> => joi;
