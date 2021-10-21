import { Module } from '@nestjs/common';

import { fsExtraProvider } from './providers/fs-extra';
import { pathProvider } from './providers/path';
import { FileSystemService } from './services/file-system/file-system';
import { PathResolverService } from './services/path-resolver/path-resolver';

@Module({
  providers: [fsExtraProvider, FileSystemService, pathProvider, PathResolverService],
  exports: [FileSystemService, PathResolverService],
})
export class FileSystemModule {}
