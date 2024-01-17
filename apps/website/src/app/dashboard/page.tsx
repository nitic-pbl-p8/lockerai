import type { NextPage } from 'next';
import { LostItemStatus } from '~website/src/module/dashboard/ui/page/lost-item-status-section';
import { PinnedTask } from '~website/src/module/dashboard/ui/page/pinned-task-section';

const DashboardPage: NextPage = () => (
  <div className="flex flex-col items-center gap-32">
    <PinnedTask />
    <LostItemStatus />
  </div>
);

export default DashboardPage;
