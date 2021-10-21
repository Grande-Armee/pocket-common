import { Provider } from '@nestjs/common';
import { createNamespace } from 'cls-hooked';

import { CLS_NAMESPACE_SCOPE, CLS_NAMESPACE_TOKEN } from './constants';
import { ClsNamespace } from './interfaces/cls-namespace';

export const clsNamespaceFactory = async (): Promise<ClsNamespace> => {
  return createNamespace(CLS_NAMESPACE_SCOPE);
};

export const clsNamespaceProvider: Provider = {
  provide: CLS_NAMESPACE_TOKEN,
  useFactory: clsNamespaceFactory,
};
