import { Global, Module } from '@nestjs/common';
import { DataLoaderCacheService } from './data-loader-cache.service';

@Global()
@Module({
  providers: [DataLoaderCacheService],
  exports: [DataLoaderCacheService],
})
export class CacheModule {}
