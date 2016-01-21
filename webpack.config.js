var path = require('path')
var webpack = require('webpack')
var data = require('./data');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        // new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss?$/,
            loaders: ['style', 'css', 'sass'],
            include: __dirname
        }]
    }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
    // Resolve Redux to source
    module.exports.resolve = {
            alias: {
                'redux': reduxSrc
            }
        }
        // Compile Redux from source
    module.exports.module.loaders.push({
        test: /\.js$/,
        loaders: ['babel'],
        include: reduxSrc
    })
}
