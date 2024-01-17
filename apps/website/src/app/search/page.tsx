import type { NextPage } from 'next';
import { SearchItemsSection } from '~website/src/module/search/ui/page/search-items-section';

const SearchPage: NextPage = () => (
  <div className="flex flex-col items-center gap-32">
    <SearchItemsSection />
  </div>
);
export default SearchPage;
