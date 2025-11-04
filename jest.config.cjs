/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/tests'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/*.test.ts'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/testSetup.ts'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  coveragePathIgnorePatterns: ['/node_modules/'],
  // runInBand: true,
  collectCoverage: true,
};