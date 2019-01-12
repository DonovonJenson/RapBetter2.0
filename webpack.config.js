const webpack = require("webpack");

//Don't forget to create a production build for this

module.exports = {
	entry: "./Client/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
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
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./Client",
	}
};