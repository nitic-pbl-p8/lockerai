'use client';

import { Button } from '@lockerai/core/component/button';
import { Dialog, DialogContent } from '@lockerai/core/component/dialog';
import { PartyPopperEmojiIcon } from '@lockerai/core/icon/party-popper-emoji-icon';
import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ResultDialogProps = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'children' | 'className'>;

export const ResultDialog = ({ ...props }: ResultDialogProps): ReactNode => {
  const router = useRouter();

  return (
    <Dialog {...props}>
      <DialogContent variant={{ color: 'green' }}>
        <p className="mt-8 flex items-center gap-3 text-4xl font-bold text-sage-12">
          You are <span className="text-green-11">authorized</span> as owner!
          <PartyPopperEmojiIcon className="h-10 w-auto" />
        </p>
        <p className="text-xl text-sage-11">
          You are now authorized as the owner of this lost item.
          <br />
          Please go to the nearest locker and retrieve the lost item.
        </p>
        <Button
          onClick={() => {
            router.push('/dashboard');
          }}
          variant={{
            border: true,
            color: 'green',
          }}
        >
          Go Dashboard
        </Button>
      </DialogContent>
    </Dialog>
  );
};
