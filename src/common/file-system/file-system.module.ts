import { Module } from '@nestjs/common';

import { fsExtraProvider } from './providers/fs-extra';
import { pathProvider } from './providers/path';
import { FileSystemService } from './services/file-system/file-system.service';
import { PathResolverService } from './services/path-resolver/path-resolver.service';

@Module({
  providers: [fsExtraProvider, FileSystemService, pathProvider, PathResolverService],
  exports: [FileSystemService, PathResolverService],
})
export class FileSystemModule {}
