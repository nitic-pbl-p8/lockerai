import { getBaseUrl } from '@lockerai/core/util/get-base-url';
import { registerUrql } from '@lockerai/urql';
import schema from '~website/graphql.schema.json';

const { getClient } = registerUrql(schema, getBaseUrl({ app: 'api' }).toString(), getBaseUrl({ app: 'api-ws' }).toString());

export const urqlClient = getClient();
