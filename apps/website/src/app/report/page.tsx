import type { NextPage } from 'next';
import { ReportItemsSection } from '~website/src/module/report/ui/page/report-items-section';

const ReportPage: NextPage = () => (
  <div className="flex flex-col gap-32">
    <ReportItemsSection />
  </div>
);
export default ReportPage;
