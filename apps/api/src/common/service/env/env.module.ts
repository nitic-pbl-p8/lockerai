import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { match } from 'ts-pattern';
import { EnvService } from './env.service';
import { validate } from './validate';

const envFilePath = match(process.env['NODE_ENV'])
  .with('development', () => ['.env', '.env.development'])
  .with('production', () => ['.env', '.env.production'])
  .with('test', () => ['.env', '.env.test'])
  .otherwise(() => ['.env', '.env.development']);

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validate,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
