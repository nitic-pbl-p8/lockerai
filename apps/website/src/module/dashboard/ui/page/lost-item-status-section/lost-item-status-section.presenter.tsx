import { LostItemDetail } from '#website/module/dashboard/ui/component/lost-item-detail';

export const LostItemStatus = () => (
    <section className="flex w-[1272px] flex-col gap-8 rounded-3xl border border-solid border-sage-7 bg-sage-1 px-10 py-8">
      <div className="flex w-fit gap-6 rounded-xl border border-solid border-sage-7 bg-sage-2 px-4 py-2.5">
        <ul className=" flex flex-wrap gap-8 text-center text-sm text-sage-11">
          <li className="rounded-lg px-5 py-1.5 text-xl font-bold text-sage-11 hover:bg-sage-5 hover:text-sage-12">
            <p>All</p>
          </li>

          <li className="rounded-lg px-5 py-1.5 text-xl font-bold text-sage-11 hover:bg-sage-5 hover:text-sage-12">
            <p>Retrieved</p>
          </li>

          <li className="rounded-lg px-5 py-1.5 text-xl font-bold text-sage-11 hover:bg-sage-5 hover:text-sage-12">
            <p>Delivered</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap gap-16">
        <LostItemDetail isRetrieved />
        <LostItemDetail isRetrieved={false} />
        <LostItemDetail isRetrieved />
      </div>
    </section>
  );
