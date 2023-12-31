import { match } from 'ts-pattern';

type GetBaseUrlConfig = {
  app: 'api' | 'api-ws' | 'website';
};

const getApiBaseUrl = (): URL => {
  let baseUrl: URL;
  if (process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']) {
    baseUrl = new URL(process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']);
  } else if (process.env['NODE_ENV'] === 'production') {
    // TODO: Return the collect base URL.
    baseUrl = new URL('https://api.locker.ai');
  } else {
    baseUrl = new URL(`http://localhost:${process.env['PORT'] || 4000}`);
  }

  return baseUrl;
};

const getApiWsBaseUrl = (): URL => {
  let baseUrl: URL;
  if (process.env['NEXT_PUBLIC_WS_ENDPOINT']) {
    baseUrl = new URL(process.env['NEXT_PUBLIC_WS_ENDPOINT']);
  } else if (process.env['NODE_ENV'] === 'production') {
    // TODO: Return the collect base URL.
    baseUrl = new URL('wss://api.locker.ai');
  } else {
    baseUrl = new URL(`ws://localhost:${process.env['PORT'] || 4000}`);
  }

  return baseUrl;
};

const getWebsiteBaseUrl = (): URL => {
  let baseUrl: URL;
  if (process.env['NODE_ENV'] === 'production') {
    baseUrl = new URL('https://lockerai.vercel.app');
  } else if (process.env['VERCEL_URL']) {
    baseUrl = new URL(`https://${process.env['VERCEL_URL']}`);
  } else {
    baseUrl = new URL(`http://localhost:${process.env['PORT'] || 3000}`);
  }

  return baseUrl;
};

/**
 * Get the base URL of the app.
 * @param app The app from which to get the base URL.
 * @returns The base URL of the app with trailing slash removed.
 * @example
 * ```ts
 * const baseUrl = getBaseUrl({ app: 'api' });
 * // => https://api.locker.ai
 * ```
 */
export const getBaseUrl = ({ app }: GetBaseUrlConfig): URL => {
  const baseUrl = match<typeof app, URL>(app)
    .with('api', () => getApiBaseUrl())
    .with('api-ws', () => getApiWsBaseUrl())
    .with('website', () => getWebsiteBaseUrl())
    .exhaustive();

  baseUrl.pathname = baseUrl.pathname.replace(/\/$/, '');

  return baseUrl;
};
