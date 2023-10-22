import type { ApolloConfigInput } from '@apollo/server';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  private readonly logger = new Logger(EnvService.name);

  constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
    this.logger.debug(`${EnvService.name} constructed`);
    this.logger.log(`NODE_ENV: ${this.NodeEnv}`);
  }

  get NodeEnv(): 'development' | 'production' | 'test' {
    const nodeEnv = this.configService.get<'development' | 'production' | 'test'>('NODE_ENV', 'development');

    return nodeEnv;
  }

  get Port(): number {
    const port = this.configService.get<number>('PORT', 4000);

    return port;
  }

  get DatabaseUrl(): string {
    const databaseUrl = this.configService.getOrThrow<string>('DATABASE_URL');

    return databaseUrl;
  }

  get DatabaseSslCert(): string {
    const databaseSslCert = this.configService.getOrThrow<string>('DATABASE_SSL_CERT');

    return databaseSslCert;
  }

  get ApolloStudioConfig(): ApolloConfigInput {
    const apolloConfigInput: ApolloConfigInput = {
      key: this.configService.getOrThrow('APOLLO_KEY'),
      graphRef: this.configService.getOrThrow('APOLLO_GRAPH_REF'),
    };

    return apolloConfigInput;
  }
}
