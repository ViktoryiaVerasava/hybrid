var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {
    
    entry: ['./src/index.ts'],
    output: {
        filename: 'build.js',
        path: path.join(__dirname, './dist'),
    },
    
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.ts', '.js', '.json']
    },
    devtool: "inline-eval-cheap-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module: {
        loaders: loaders
    }

};
