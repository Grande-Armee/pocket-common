import { Module } from '@nestjs/common';

import { fsExtraProvider } from './providers/fsExtra';
import { pathProvider } from './providers/path';
import { FileSystemService } from './services/fileSystem/fileSystemService';
import { PathResolverService } from './services/pathResolver/pathResolverService';

@Module({
  providers: [fsExtraProvider, FileSystemService, pathProvider, PathResolverService],
  exports: [FileSystemService, PathResolverService],
})
export class FileSystemModule {}
