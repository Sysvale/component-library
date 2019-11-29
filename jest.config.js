module.exports = {
	verbose: true,
	roots: ['<rootDir>/src/', '<rootDir>/specs/', '<rootDir>/test/'],
	moduleFileExtensions: ['js', 'vue'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.vue$': 'vue-jest',
	},
	snapshotSerializers: [
		'<rootDir>/node_modules/jest-serializer-vue',
	],
	transformIgnorePatterns: ['/node_modules/(?!(@storybook/.*\\.vue$))'],
};
