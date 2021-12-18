import { plainToInstance } from 'class-transformer';

import { Validator } from '../validator';

export class Transformer {
  public static createInstanceFactory<T>(constructor: new () => T) {
    return (props: T): T => Transformer.transformTo(constructor, props);
  }

  public static createEntityFactory<T>(constructor: new () => T) {
    return (props: Partial<T>): T => Transformer.transformTo(constructor, props);
  }

  public static transformTo<T>(Constructor: new () => T, plain: Record<any, any>): T {
    const transformed = plainToInstance(Constructor, plain);

    Validator.validate(transformed);

    return transformed;
  }
}
