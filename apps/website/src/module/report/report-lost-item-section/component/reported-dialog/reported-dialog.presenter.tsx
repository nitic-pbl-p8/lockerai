'use client';

import { Button } from '@lockerai/core/component/button';
import { Dialog, DialogContent } from '@lockerai/core/component/dialog';
import { MemoEmojiIcon } from '@lockerai/core/icon/memo-emoji-icon';
import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ReportedDialogProps = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'children' | 'className'>;

export const ReportedDialog = ({ ...props }: ReportedDialogProps): ReactNode => {
  const router = useRouter();

  return (
    <Dialog {...props}>
      <DialogContent>
        <p className="flex items-center gap-3 text-4xl font-bold text-sage-12">
          Lost item was reported!
          <MemoEmojiIcon className="h-10 w-auto" />
        </p>
        <p className="text-xl text-sage-11">
          Thank you for your good deed.
          <br />
          Please go to the Locker and store the lost item in the drawer provided.
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
