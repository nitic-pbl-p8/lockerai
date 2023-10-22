'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type PageTransitionAnimationProps = ComponentPropsWithoutRef<typeof motion.main>;

export const PageTransitionAnimation = ({ children, ...props }: PageTransitionAnimationProps): ReactNode => {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      className="min-h-[100svh]"
      {...props}
    >
      {children}
    </motion.main>
  );
};
