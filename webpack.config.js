const path = require('path');
const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const plugins = [

	new HtmlWebpackPlugin({
		// inject: false,
		template: './src/index.html'
		// config: config,
		// packageJson: packageJson
	}),

	new SpriteLoaderPlugin({
		plainSprite: true
	})

];

const rules = [

	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		}
	},

	// HTML templates
	{
		test: /\.html$/,
		use: [
			{ loader: 'html-loader' }
		]
	},

	// icon SVG spriter loader
	{
		test: /[\\/]svg-icons[\\/].+\.svg$/,
		use: [
			{
				loader: 'svg-sprite-loader',
				options: {
					extract: true,
					spriteFilename: 'icons.svg',
					// symbolId: filePath =>
					// 	'icon-svg-'
					// 	+ filePath.replace(/.*?[\\/]/g,'').replace(/^\d+-|.svg/g,'')
				}
			},
			{
				loader: 'svgo-loader',
				options: {
					plugins: [
						// {
						// 	removeStyleElement: false,
						// },
						{convertStyleToAttrs: false},
						{mergePaths: true},
						{inlineStyles: false},
						// {
						// 	cleanupAttrs: false
						// },
						{
							removeAttrs: {
								attrs: '(fill|stroke)'
							}
						}
					]
				}
			}
		]
	}

];

module.exports = {
	mode: 'production',
	// watch: envDevDebugging,
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		filename: '[name].bundle.[contenthash].js',
		sourceMapFilename: '[file].map'
	},
	devtool: false,
	stats: {
		children: false,
		chunkModules: false,
		entrypoints: false,
		modules: false,
	},
	optimization: {
		minimize: true,
	},
	performance: {
		hints: false
	},
	plugins: plugins,
	module: {
		rules: rules
	}
};
