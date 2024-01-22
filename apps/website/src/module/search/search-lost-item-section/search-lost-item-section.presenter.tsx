'use client';

import { type ComponentPropsWithoutRef, useEffect, useState } from 'react';
import type { LostItem } from '#website/common/model/lost-item';
import type { User, UserPublicMeta } from '#website/common/model/user';
import { ConfirmDialog } from './component/confirm-dialog';
import { ResultDialog } from './component/result-dialog';
import { SearchLostItemForm } from './component/search-lost-item-form';

type SearchLostItemSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  user: User;
};

export const SearchLostItemSection = ({ user, ...props }: SearchLostItemSectionProps) => {
  const [similarLostItem, setSimilarLostItem] = useState<LostItem>();
  const [similarLostItemReporter, setSimilarLostItemReporter] = useState<UserPublicMeta>();
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState<boolean>();
  const [isResultDialogOpen, setResultDialogOpen] = useState<boolean>();

  useEffect(() => {
    if (similarLostItem && similarLostItemReporter) {
      setConfirmDialogOpen(true);
    }
  }, [similarLostItem, similarLostItemReporter]);

  return (
    <section className="flex flex-col items-center gap-16 px-32 py-16" {...props}>
      <SearchLostItemForm
        onSimilarLostItemFound={(foundSimilarLostItem, foundSimilarLostItemReporter) => {
          setSimilarLostItem(foundSimilarLostItem);
          setSimilarLostItemReporter(foundSimilarLostItemReporter);
        }}
      />
      {similarLostItem && similarLostItemReporter && (
        <ConfirmDialog
          user={user}
          lostItem={similarLostItem}
          reporter={similarLostItemReporter}
          onOwned={() => {
            setConfirmDialogOpen(false);
            setResultDialogOpen(true);
          }}
          open={isConfirmDialogOpen}
          onOpenChange={setConfirmDialogOpen}
        />
      )}
      <ResultDialog open={isResultDialogOpen} onOpenChange={setResultDialogOpen} />
    </section>
  );
};