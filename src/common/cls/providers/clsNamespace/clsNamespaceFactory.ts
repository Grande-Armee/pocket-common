import { createNamespace } from 'cls-hooked';

import { ClsNamespace } from './types';

export const clsNamespaceFactory = async (): Promise<ClsNamespace> => {
  return createNamespace('pocket_cls_namespace');
};
