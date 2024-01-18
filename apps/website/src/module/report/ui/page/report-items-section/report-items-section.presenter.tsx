import { Button } from '#core/component/button';
import { PlaneIcon } from '@lockerai/core/icon/plane-icon';
import { type ComponentPropsWithoutRef } from 'react';
import { DropImage } from 'src/module/report/ui/component/drop-image';

type ReportItemsSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'>;
export const ReportItemsSection = ({ ...props }: ReportItemsSectionProps) => {
  return (
    <section className="flex flex-col items-start gap-16 px-32 py-16" {...props}>
      <div className="flex flex-col items-start gap-2">
        <p className="text-7xl font-bold text-sage-12">Report</p>
        <p className="text-2xl text-sage-11">Take photos of the lost item and report to it.</p>
      </div>

      <div className="flex w-full flex-col items-center gap-6">
        <div className="ml-auto flex items-center rounded-xl border border-green-7 bg-green-3 px-8 py-3 text-lg font-bold text-green-11">
          <Button>report</Button>
          <PlaneIcon />
        </div>
        <DropImage />
      </div>
    </section>
  );
};
