import { Injectable, Logger } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PubSubService extends PubSub {
  private readonly logger = new Logger(PubSubService.name);

  constructor() {
    super();

    this.logger.debug(`${PubSubService.name} constructed`);
  }
}
