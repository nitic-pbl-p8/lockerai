import type { Metadata, NextPage } from 'next';
import { PinnedTask } from '~website/src/module/dashboard/pinned-task-section';

const DashboardPage: NextPage = () => <PinnedTask />;

export default DashboardPage;

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Dashboard',
});
