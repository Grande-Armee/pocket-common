import { Injectable } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ValidationError } from '../../errors';

@Injectable()
export class DtoFactory {
  public create<T>(DtoConstructor: ClassConstructor<T>, params: T): T {
    const dto = plainToClass(DtoConstructor, params);

    const validationErrors = validateSync(dto as any, {
      whitelist: true,
    });

    if (validationErrors.length) {
      throw new ValidationError(DtoConstructor, validationErrors);
    }

    return dto;
  }
}
