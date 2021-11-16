import { Injectable } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';

@Injectable()
export class DtoFactory {
  public createDtoInstance<T>(type: ClassConstructor<T>, params: T): T {
    return plainToClass(type, params, { excludeExtraneousValues: true });
  }
}
