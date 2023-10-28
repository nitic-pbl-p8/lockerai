import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import { match } from 'ts-pattern';

const envFilePath = match(process.env['NODE_ENV'])
  .with('development', () => ['.env', '.env.development'])
  .with('production', () => ['.env', '.env.production'])
  .with('test', () => ['.env', '.env.test'])
  .otherwise(() => ['.env', '.env.development']);

envFilePath.forEach((path) => dotenv.config({ path }));

if (!process.env['DATABASE_URL']) {
  throw new Error('DATABASE_URL is not defined.');
}

const drizzleConfig: Config = {
  schema: './src/infra/drizzle/schema/**/*.ts',
  out: './src/infra/drizzle/migrations',
  breakpoints: true,
  strict: true,
  driver: 'pg',
  dbCredentials:
    process.env['NODE_ENV'] === 'production'
      ? {
          connectionString: `${process.env['DATABASE_URL']}?sslmode=verify-full&sslrootcert=prod-ca-2021.crt`,
          ssl: true,
        }
      : {
          connectionString: process.env['DATABASE_URL'],
        },
};

export default drizzleConfig;
