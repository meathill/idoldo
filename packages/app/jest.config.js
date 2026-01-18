module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  watchman: false,
  moduleNameMapper: {
    '^expo/src/winter$': '<rootDir>/__mocks__/expo-winter.ts',
  },
};
