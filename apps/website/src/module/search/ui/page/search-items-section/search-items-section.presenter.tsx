import { InsightIcon } from '@lockerai/core/icon/insight-icon';
import { type ComponentPropsWithoutRef } from 'react';

type SearchItemsSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'>;
export const SearchItemsSection = ({ ...props }: SearchItemsSectionProps) => (
    <section className="flex py-9" {...props}>
      <div className="grid flex-col items-center gap-8">
        <div className="flex w-[910px] gap-4 rounded-full border border-solid border-green-7 bg-green-3 px-8 py-4 text-2xl text-sage-11">
          <InsightIcon className="h-[32px] w-[32px] stroke-sage-11" />
          <input type="text" className="w-full bg-green-3" placeholder="Enter your lost item features…" />
        </div>

        <div className="grid w-[910px] flex-col items-center gap-5">
          <div className="grid flex-col items-start gap-3 rounded-3xl border border-solid border-amber-7 bg-amber-2 px-8 py-6">
            <p className="flex text-xl font-bold text-amber-11">Too few features</p>
            <p className="grid flex-col items-start gap-1 pl-3 text-2xl text-sage-12">
              Please enter more features. For example, it is more effective to enter not only features of the item, but also information about when
              and where it was lost.
            </p>
          </div>

          <div className="grid flex-col items-start gap-3 rounded-3xl border border-solid border-sage-7 bg-sage-2 px-8 py-6">
            <p className="text-xl font-bold text-sage-11">Ex.</p>
            <div className="grid flex-col items-start gap-1 pl-3">
              <p className="text-2xl text-sage-12">phone, iPhone 15, white</p>
              <p className="text-2xl text-sage-12">watch, white, G-Shock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
