import { Transform, plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsUrl, validateSync } from 'class-validator';

export class EnvValidator {
  @IsEnum(['development', 'production', 'test'])
  NODE_ENV!: 'development' | 'production' | 'test';

  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  PORT = 4000;

  @IsUrl({ protocols: ['postgresql'], require_tld: process.env['NODE_ENV'] === 'production' })
  DATABASE_URL!: string;

  DATABASE_SSL_CERT!: string;

  APOLLO_KEY!: string;

  APOLLO_GRAPH_REF!: string;
}

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
