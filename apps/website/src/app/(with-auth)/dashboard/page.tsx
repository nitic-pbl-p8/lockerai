import type { Metadata, NextPage } from 'next';

const DashboardPage: NextPage = () => null;

export default DashboardPage;

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Dashboard',
});
