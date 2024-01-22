'use client';

import { useTheme } from '#core/component/theme-provider';
import { getBaseUrl } from '#core/util/get-base-url';
import { colors } from '@lockerai/design-token';
import { AnimatePresence, motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { match } from 'ts-pattern';
import { useUseUpdatedChallengeUseCase } from '#locker-dashboard/use-case/updated-challenge/hook';

type ChallengeSectionProps = Omit<ComponentPropsWithoutRef<typeof motion.section>, 'children' | 'className'> & {
  lockerId: string;
  fallback?: ReactNode;
};

export const ChallengeSection = ({ lockerId, fallback, ...props }: ChallengeSectionProps): ReactNode => {
  const { resolvedTheme } = useTheme();

  const challengingHashedFingerprintId = useUseUpdatedChallengeUseCase(lockerId);

  return (
    <AnimatePresence>
      {challengingHashedFingerprintId ? (
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="relative flex h-[100svh] flex-col items-center justify-center gap-12 px-32"
          {...props}
        >
          <hgroup className="flex flex-col items-center gap-6">
            <h1 className="text-6xl font-bold text-sage-12">Register your fingerprint</h1>
            <p className="text-2xl text-sage-11">
              Your fingerprint is not yet registered.
              <br />
              Scan the following QR code to register your fingerprint.
            </p>
          </hgroup>
          <QRCodeSVG
            value={`${getBaseUrl({ app: 'website' })}/auth/challenge?lockerId=${lockerId}&hashedFingerprintId=${challengingHashedFingerprintId}`}
            bgColor={match(resolvedTheme)
              .with('dark', () => colors.dark.green['2'])
              .with('light', () => colors.light.green['2'])
              .otherwise(() => colors.dark.green['2'])}
            fgColor={match(resolvedTheme)
              .with('dark', () => colors.dark.green['11'])
              .with('light', () => colors.light.green['11'])
              .otherwise(() => colors.dark.green['11'])}
            className="aspect-square h-1/2 w-fit max-w-[90vw] rounded-xl bg-green-2 p-5 drop-shadow-2xl"
          />
        </motion.section>
      ) : (
        fallback
      )}
    </AnimatePresence>
  );
};
