import { createConfig } from '@lockerai/tailwind/config';

const config = createConfig((defaultConfig) => ({
  ...defaultConfig,
  content: ['./.storybook/**/*.{ts,tsx}', '../../**/*.{ts,tsx}', '!../../**/*.d.ts'],
}));

export default config;
