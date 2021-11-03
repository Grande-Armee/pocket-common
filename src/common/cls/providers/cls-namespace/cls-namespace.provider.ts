import { Provider } from '@nestjs/common';

import { clsNamespaceFactory } from './cls-namespace.factory';

export const CLS_NAMESPACE = Symbol('CLS_NAMESPACE');

export const clsNamespaceProvider: Provider = {
  provide: CLS_NAMESPACE,
  useFactory: clsNamespaceFactory,
};
