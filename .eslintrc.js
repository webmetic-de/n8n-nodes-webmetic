module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'n8n-nodes-base',
	],
	extends: [
		'plugin:n8n-nodes-base/community',
	],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	ignorePatterns: [
		'.eslintrc.js',
		'gulpfile.js', 
		'**/*.js',
		'node_modules/**',
		'dist/**',
	],
	rules: {
		'n8n-nodes-base/node-filename-against-convention': 'error',
		'n8n-nodes-base/cred-filename-against-convention': 'error',
	},
};