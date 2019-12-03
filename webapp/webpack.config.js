var path = require('path');
var webpack = require('webpack');
var HtmlWebpack = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin()
      ]
    },
    output: {
        filename: '[name].js',
        path : path.resolve(__dirname, './dist/')
    },
    // devtool: 'inline-source-map',    
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".html"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    },
                    'angular2-template-loader',
                    '@ngtools/webpack'
                ]
            },
            {
              test: /\.(css|scss|sass)$/,
              loaders: ["to-string-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: './src/index.html',
            inject: false
        }),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: true
        })
    ]
}
