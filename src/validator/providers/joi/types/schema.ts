import joi from 'joi';

export type Schema<Shape> = joi.ObjectSchema<Shape>;
