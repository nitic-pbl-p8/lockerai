'use client';

import { BrandIcon } from '@lockerai/core/component/brand-icon';
import { Button } from '@lockerai/core/component/button';
import { Dialog, DialogContent } from '@lockerai/core/component/dialog';
import { GoogleIcon } from '@lockerai/core/icon/google-icon';
import { useRouter } from 'next/navigation';
import { type ComponentPropsWithoutRef, type ReactNode, useEffect, useState } from 'react';

type SignInDialogProps = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'children' | 'className'> & {
  signIn: () => Promise<void>;
};

export const SignInDialog = ({ signIn, defaultOpen, ...props }: SignInDialogProps): ReactNode => {
  const [open, setOpen] = useState<boolean>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(defaultOpen ?? false);
  }, [defaultOpen]);

  useEffect(() => {
    if (open === false) {
      router.push('/');
    }
  }, [open, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogContent>
        <div className="flex items-center gap-2">
          <BrandIcon className="h-16" />
          <p className="text-5xl font-bold text-sage-12">You need to sign in</p>
        </div>
        <p className="text-xl text-sage-11">
          Locker.ai is a service that uses a unique AI-driven authentication mechanism to safely report and retrieve lost items. Sign in to the
          Locker.ai to manage lost items.
        </p>
        <Button
          icon={GoogleIcon}
          onClick={async () => {
            setLoading(true);
            await signIn();
          }}
          variant={{
            border: true,
            color: loading ? 'sage' : 'green',
            loading,
          }}
        >
          Sign in with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};
