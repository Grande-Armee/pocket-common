import { Inject, Injectable } from '@nestjs/common';

import { Path, PATH_TOKEN } from '../../providers/path';

@Injectable()
export class PathResolverService {
  public constructor(@Inject(PATH_TOKEN) private readonly path: Path) {}

  public resolve(parts: string[]): string {
    return this.path.join(...parts);
  }
}
