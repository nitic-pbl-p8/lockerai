'use client';

import { Dialog, DialogContent } from '@lockerai/core/component/dialog';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type RelateResultDialogProps = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'children' | 'className'>;

export const RelateResultDialog = ({ defaultOpen, ...props }: RelateResultDialogProps): ReactNode => (
  <Dialog {...props}>
    <DialogContent>
      <p className="mt-8 flex items-center gap-3 text-center text-4xl font-bold text-sage-12">Linking fingerprint successful!</p>
      <p className="text-xl text-sage-11">
        Now your fingerprint is linked to your account.
        <br />
        Please scan your fingerprint again to unlock the door.
      </p>
    </DialogContent>
  </Dialog>
);
