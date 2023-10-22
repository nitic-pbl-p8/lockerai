// TODO: if fix this issue, rewrite by typescript.
// ref: https://github.com/TypeStrong/ts-node/issues/2000
/** @type {import('jest').Config} */
module.exports = {
  collectCoverageFrom: ['./src/**/*.*ts'],
  coverageDirectory: './coverage',
  moduleFileExtensions: ['json', 'js', 'ts'],
  moduleNameMapper: {
    '^#core/(.*)$': '<rootDir>/../core/$1',
    '^#markdown/(.*)$': '<rootDir>/../markdown/$1',
  },
  rootDir: '.',
  setupFiles: ['dotenv/config'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
};
