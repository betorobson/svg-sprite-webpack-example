const path = require('path');
const webpack = require('webpack');

const watch = /watch/.test(process.env.npm_lifecycle_script);

// plugins
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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

if(watch){
	plugins.push(
		new BrowserSyncPlugin({
			// browser: browser,
			single: true,
			// host: config.url,
			open: 'external',
			port: 8080,
			server: { baseDir: ['./dist/'] },
		})
	)
}

module.exports = {
	mode: 'production',
	watch: watch,
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
