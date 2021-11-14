import { Inject, Injectable } from '@nestjs/common';

import { FS_EXTRA, FsExtra } from '../../providers/fsExtra';

@Injectable()
export class FileSystemService {
  public constructor(@Inject(FS_EXTRA) private readonly fsExtra: FsExtra) {}

  public async readFile(path: string): Promise<string> {
    const fileContentsBuffer = await this.fsExtra.readFile(path);

    const fileContents = fileContentsBuffer.toString();

    return fileContents;
  }
}
