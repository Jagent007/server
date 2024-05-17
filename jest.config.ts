import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageProvider: 'v8',
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/**/*.config.ts',
		'!<rootDir>/src/database/**/*.ts',
		'!<rootDir>/src/index.ts',
		'!<rootDir>/src/errors/**/*.ts',
		'!<rootDir>/src/routes/**/*.ts',
		'!<rootDir>/src/helpers/**/*.ts',
		'!<rootDir>/src/types/**/*.ts',
		'!<rootDir>/src/tests/**/*.ts',
	],
	testPathIgnorePatterns: ['/node_modules/'],
	clearMocks: true,
	restoreMocks: true,
	bail: true,
};

export default jestConfig;
