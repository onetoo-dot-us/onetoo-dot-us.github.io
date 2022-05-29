module.exports = {
  roots: ['./src'],
  collectCoverageFrom: [
    './src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/mocks/**',
  ],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ['./config/jest/setupTests.js'],
  testEnvironment: 'jsdom',
  modulePaths: ['./src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest',
    '^.+\\.css$': './config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      './config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: ['./src'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
