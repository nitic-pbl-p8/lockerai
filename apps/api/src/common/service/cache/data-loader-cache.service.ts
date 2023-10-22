import { Injectable, Logger } from '@nestjs/common';
import type DataLoader from 'dataloader';

@Injectable()
// eslint-disable-next-line no-use-before-define
export class DataLoaderCacheService<T extends Record<'id', K>, K, C = K> {
  private readonly logger = new Logger(DataLoaderCacheService.name);

  constructor() {
    this.logger.debug(`${DataLoaderCacheService.name} constructed`);
  }

  prime(dataLoader: DataLoader<K, T, C>, obj: T) {
    dataLoader.prime(obj.id, obj);
  }

  primeMany(dataLoader: DataLoader<K, T, C>, objs: T[]) {
    objs.forEach((obj) => {
      dataLoader.prime(obj.id, obj);
    });
  }
}
