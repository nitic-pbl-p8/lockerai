import { getBaseUrl } from '#core/util/get-base-url';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const cookieStore = cookies();

  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  if (!code) {
    return NextResponse.redirect(requestUrl);
  }
  const redirectPathname = requestUrl.searchParams.get('redirectPathname');

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(requestUrl, {
      status: error.status,
      statusText: error.message,
    });
  }

  return NextResponse.redirect(`${getBaseUrl({ app: 'website' })}/${decodeURIComponent(redirectPathname ?? '/')}`);
};
