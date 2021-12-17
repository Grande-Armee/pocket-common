import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ValidationError } from './errors';

export class Transformer {
  public static createInstanceFactory<T>(constructor: new () => T) {
    return (props: T): T => Transformer.transformTo(constructor, props);
  }

  public static createEntityFactory<T>(constructor: new () => T) {
    return (props: Partial<T>): T => Transformer.transformTo(constructor, props);
  }

  public static transformTo<T>(Constructor: new () => T, plain: Record<any, any>): T {
    const transformed = plainToInstance(Constructor, plain);

    const validationErrors = validateSync(transformed as any, {
      whitelist: true,
    });

    if (validationErrors.length) {
      throw new ValidationError(Constructor, validationErrors);
    }

    return transformed;
  }
}
