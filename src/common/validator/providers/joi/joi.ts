import { Provider } from '@nestjs/common';
import joi from 'joi';

import { JOI_TOKEN } from './constants';
import { Joi } from './interfaces/joi';

export const joiFactory = async (): Promise<Joi> => joi;

export const joiProvider: Provider = {
  provide: JOI_TOKEN,
  useFactory: joiFactory,
};
