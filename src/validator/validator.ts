import { validateSync } from 'class-validator';

import { ValidationError } from './errors';

export class Validator {
  public static validate<T>(target: T): T {
    const validationErrors = validateSync(target as any, {
      whitelist: true,
    });

    if (validationErrors.length) {
      throw new ValidationError(target, validationErrors);
    }

    return target;
  }
}
