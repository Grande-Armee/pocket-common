import { Inject, Injectable } from '@nestjs/common';

import { ClsNamespace, CLS_NAMESPACE } from '../../providers/cls-namespace';

@Injectable()
export class ClsContextService {
  public constructor(@Inject(CLS_NAMESPACE) private readonly clsNamespace: ClsNamespace) {}

  public set(key: string, value: unknown): boolean {
    const isActive = Boolean(this.clsNamespace.active);

    if (!isActive) {
      return false;
    }

    this.clsNamespace.set(key, value);

    return true;
  }

  public get<T>(key: string): T | undefined {
    return this.clsNamespace.get(key);
  }

  public getNamespace(): ClsNamespace {
    return this.clsNamespace;
  }
}
