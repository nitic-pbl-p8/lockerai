import type { NextPage } from 'next';
import { HeroSection } from '#website/module/introduction/ui/page/hero-section';
import { jsonLd } from './json-ld';

const RootPage: NextPage = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <HeroSection />
  </>
);

export default RootPage;
