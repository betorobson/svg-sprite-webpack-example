const path = require('path');
const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const plugins = [

	new HtmlWebpackPlugin({
		template: './src/index.html'
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
				}
			},
			{
				loader: 'svgo-loader',
				options: {
					plugins: [
						{convertStyleToAttrs: false},
						{mergePaths: true},
						{inlineStyles: false},
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
