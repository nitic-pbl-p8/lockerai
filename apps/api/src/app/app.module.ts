import { Module } from '@nestjs/common';
import { CacheModule } from '#api/common/service/cache/cache.module';
import { EnvModule } from '#api/common/service/env/env.module';
import { PubSubModule } from '#api/common/service/pubsub/pubsub.module';
import { GraphQLConfigModule } from '#api/config/graphql/graphql-config.module';
import { PrismaModule } from '#api/infra/prisma/prisma.module';
import { Modules } from '#api/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, PrismaModule, CacheModule, PubSubModule, ...Modules],
})
export class AppModule {}
