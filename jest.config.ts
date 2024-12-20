import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/interfaces'],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/**/authenticatedUser.ts', '!<rootDir>/src/**/Main/server.ts', '!<rootDir>/src/**/**/index.ts', '!<rootDir>/src/Domain/model/**', '!<rootDir>/src/Domain/repositories/**', '!<rootDir>/src/Infrastructure/**/*Helper.ts', '!**/test/**', '!<rootDir>/src/Domain/DTOs/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // A map from regular expressions to paths to transformers
  // IRA CONVERTER OS ARQUIVOS TS EM JAVASCRIPT ANTES DE RODAR OS TESTES
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']

}

export default config
