'use client';

import { getBaseUrl } from '@lockerai/core/util/get-base-url';
import { createUrqlClient } from '@lockerai/urql';
import { UrqlProvider as UrqlProviderPrimitive } from '@urql/next';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import schema from '~website/graphql.schema.json';

const { urqlClient, ssr } = createUrqlClient(schema, getBaseUrl({ app: 'api' }).toString(), getBaseUrl({ app: 'api-ws' }).toString());

type UrqlProviderProps = Omit<ComponentPropsWithoutRef<typeof UrqlProviderPrimitive>, 'client' | 'ssr'>;

export const UrqlProvider = ({ children, ...props }: UrqlProviderProps): ReactNode => (
  <UrqlProviderPrimitive client={urqlClient} ssr={ssr} {...props}>
    {children}
  </UrqlProviderPrimitive>
);
