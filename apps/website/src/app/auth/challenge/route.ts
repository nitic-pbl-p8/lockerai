import { getBaseUrl } from '#core/util/get-base-url';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { relateFingerprintWithUserUseCase } from '#website/use-case/relate-fingerprint-with-user';
import { clearLockerChallengeUseCase } from '~website/src/use-case/clear-locker-challenge';

export const GET = async (request: NextRequest) => {
  const cookieStore = cookies();

  const requestUrl = new URL(request.url);

  const lockerId = requestUrl.searchParams.get('lockerId');
  const hashedFingerprintId = requestUrl.searchParams.get('hashedFingerprintId');
  if (!lockerId || !hashedFingerprintId) {
    return NextResponse.redirect(requestUrl);
  }

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return NextResponse.redirect(requestUrl, {
      status: error.status,
      statusText: error.message,
    });
  }

  if (!user) {
    return NextResponse.redirect(`${requestUrl.origin}?asAuth=true`, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }

  const relatedUser = await relateFingerprintWithUserUseCase(user.id, hashedFingerprintId).catch(() => null);
  if (!relatedUser) {
    return NextResponse.redirect(requestUrl, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }

  if ((await clearLockerChallengeUseCase(lockerId).catch(() => null)) === null) {
    return NextResponse.redirect(requestUrl, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }

  return NextResponse.redirect(`${getBaseUrl({ app: 'website' })}`);
};
