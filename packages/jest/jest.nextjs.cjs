// TODO: if fix this issue, rewrite by typescript.
// ref: https://github.com/TypeStrong/ts-node/issues/2000
const nextJest = require('next/jest');

const createNextJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const defaultConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],
};

/** @type {(overrideConfig: import('jest').Config) => Promise<import('jest').Config>} */
module.exports = (overrideConfig) =>
  createNextJestConfig({
    ...defaultConfig,
    ...overrideConfig,
  });
