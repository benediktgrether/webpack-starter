// https://medium.com/trabe/multiple-css-bundles-with-webpack-75f263095f09

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/js/main.js",
		critical: "./src/js/critical.js",
	},
	output: {
		path: path.resolve(__dirname, "assets/js"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					//If emitting file, the file path is
					filename: "../fonts/[hash][ext][query]",
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "../css/[name].css",
		}),

		new WebpackBuildNotifierPlugin({
			title: "Everyday Custom Elementor Components",
			logo: path.resolve("./webpack_icons/favicon.png"),
			suppressSuccess: true, // don't spam success notifications
		}),

		new CleanTerminalPlugin({
			beforeCompile: true,
			message: "New Build Started...",
			onlyInWatchMode: true,
		}),
	],
};
