import { parseISO } from 'date-fns';
import customScalarsExchange from 'urql-custom-scalars-exchange';

export const createScalarExchamge = (schema: Parameters<typeof customScalarsExchange>[0]['schema']) =>
  customScalarsExchange({
    schema,
    scalars: {
      DateTime: (value: unknown) => (typeof value === 'string' ? parseISO(value) : new Date(0)),
    },
  });
