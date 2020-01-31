
'use strict';

// https://eslint.org/docs/user-guide/configuring

module.exports = {
		root: true,
		parserOptions: {
			sourceType: 'module'
		},
		env: {
			browser: true,
			node: true,
      es6: true,
			jasmine: true
		},
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		extends: 'eslint:recommended',
		// extends: 'standard',
		// required to lint *.vue files
		plugins: [
			'html',
			'jasmine'
		],
		// add your custom rules here
		'rules': {
			'no-console': 'off',
			'semi': ['error', 'always'],
			'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
			'func-style': ['error', 'expression'],
			'space-before-function-paren': ['warn', 'never'],
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true
				}
			],
			'no-empty-function': 'warn',
			'no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxBOF: 1,
					maxEOF: 1
				}
			],
			"padding-line-between-statements": [
				"error",
				// { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
				// { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
				{ blankLine: 'always', prev: ['block-like', 'return'], next: '*' },
				{ blankLine: 'always', prev: '*', next: ['block-like', 'return'] },
				// { blankLine: 'always', prev: ['var', 'return'], next: ['block', 'block-like'] },
				{ blankLine: 'always', prev: 'directive', next: '*' },
				{ blankLine: 'any', prev: 'directive', next: 'directive' }
			],
			'eol-last': ['error', 'always'],
			'keyword-spacing': [
				'warn',
				{
					'before': false,
					'after': false,
					'overrides': {
						'return': {
							'after': true
						},
						'case': {
							'after': true
						},
						'import': {
							'before': true,
							'after': true
						},
						'export': {
							'before': true,
							'after': true
						},
						'from': {
							'before': true,
							'after': true
						},
					}
				}
			],
			'indent': [
				'error',
				'tab',
				{
					MemberExpression: 'off',
					flatTernaryExpressions: false,
					VariableDeclarator: 1,
					SwitchCase: 1,
					ignoredNodes: [
						'ConditionalExpression',
						'CallExpression > FunctionExpression.callee',
						'CallExpression[callee.name="angular"]',
						'FunctionDeclaration'
					]
				}
			],
			'no-tabs': 0,
			'no-multi-spaces': 'error',
			// allow paren-less arrow functions
			'arrow-parens': 0,
			// allow async-await
			'generator-star-spacing': 0
			// "max-len": ["warn", { "code": 120 }]
			// allow debugger during development
			// 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
		},
		globals: {
			"require": true,
			"describe":true,
			"QUnit":true,
			"angular":true,
			"Natura": true,
			"Swiper": true,
			"$": true,
			"moment": true,
			"Favico": true,
			"Beamer": true,
			"_": true
	}
}
