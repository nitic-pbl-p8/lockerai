import { subscriptionExchange } from '@urql/core';
import { createClient as createWsClient } from 'graphql-ws';

export const createSubscriptionExchange = (wsUrl: Parameters<typeof createWsClient>[0]['url']) => {
  const wsClient = createWsClient({
    url: wsUrl,
  });

  return subscriptionExchange({
    forwardSubscription: (request) => ({
      subscribe(sink) {
        const unsubscribe = wsClient.subscribe({ ...request, query: request.query ?? '' }, sink);

        return { unsubscribe };
      },
    }),
  });
};
