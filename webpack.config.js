const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Don't forget to create a production build for this

module.exports = {
	entry: "./Client/index.js",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /\.sass$/, /\.scss$/],
				use: ["babel-loader"],
			},
			{
				test: /\.scss$/,
				include: /./,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					"file-loader"
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	output: {
		path: __dirname + "/Client/webpackOutput",
		publicPath: "/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	],
	devServer: {
		contentBase: "./Client",
	}
};