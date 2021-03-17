/* eslint-disable max-len */
module.exports = {
  clearMocks: true,  
  maxWorkers: 1,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};