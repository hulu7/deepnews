var webpack = require('webpack');
var path = require('path');

module.exports = function (env, argv) {
	const plugins = [];
	const isProduction = env === 'production';
	console.log(
		isProduction?
			"===============================build in production mode==============================="
			:
			"===============================build in development mode=============================="
	);
	if (isProduction) {
		plugins.push(
			// JS压缩
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		);
		plugins.push(
			// 向打包文件的头部添加注释信息
			new webpack.BannerPlugin('')
		);
	}

	return {
		entry : {
			bundle : __dirname + '/app.js'
		},
		output : {
			path : __dirname,
			filename : '[name].js'
		},
		devServer : {
			host : 'localhost',
			port : 8090,
			disableHostCheck: true
		},
		module : {
			loaders : [
				{
					test : /\.css$/,
					loader : 'style-loader!css-loader'
				},
				{
					test : /\.less$/,
					loader : 'style-loader!css-loader!less-loader'
				},
				{
					test : /\.json$/,
					loader : 'json-loader'
				},
				{
					test : /\.js$/,
					exclude : /node_modules/,
					loader : 'babel-loader',
					query : {
						presets : ['es2015']
					}
				},
				{
					test: /\.jade$/,
					loader: 'jade-loader',
					exclude : /node_modules/
				},
				{
					test : /\.(png|jpg|jpeg|gif)$/,
					loader : 'url-loader?limit=5000&name=images/[hash:8].[name].[ext]'
				},
				{
					test : /\.(woff|svg|eot|ttf)\??.*$/,
					loader : 'url-loader?name=font/[name].[md5:hash:hex:7].[ext]'
				}
			]
		},
		plugins : plugins,
		resolve : {
			alias : {
				config : path.join(__dirname, "/src/configure"),
				pages : path.join(__dirname, "/src/pages"),
				styles : path.join(__dirname, "/src/styles"),
				components : path.join(__dirname, "/src/components"),
				js : path.join(__dirname, "/src/javascripts")
			}
		},
		devtool: isProduction ? undefined: 'source-map'
	}
}
