import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { EnvService } from '#api/common/service/env/env.service';
import * as schema from './schema';

export const PG_CONNECTION = 'PG_CONNECTION';

export type PgConnection = ReturnType<typeof drizzle<typeof schema>>;

@Global()
@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [EnvService],
      useFactory: (envService: EnvService): PgConnection => {
        const pool = new Pool({
          connectionString: envService.DatabaseUrl,
          ssl: envService.NodeEnv === 'production' && {
            ca: envService.DatabaseSslCert,
            cert: envService.DatabaseSslCert,
          },
        });

        return drizzle(pool, { schema, logger: true });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
