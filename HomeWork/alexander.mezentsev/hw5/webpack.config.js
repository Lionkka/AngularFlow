const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        styles: './content/styles/app.scss',
        image: './content/images/awesome.jpg',
        app: path.join(__dirname, './src/app.ts'),
        vendor: ['jquery', 'popper.js', 'bootstrap']
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('prod'),
            VER: JSON.stringify('0.0.0.1')
        }),
        new webpack.ProvidePlugin({//need for bootstrap
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery",
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
            'Popper': 'popper.js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'content/views/index.html',
            hash: true
        }),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ],

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            query: {
                useCache: true
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader']
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'resolve-url-loader', 'sass-loader']
            })
        }, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/fonts/'
            }
        }, {
            test: /\.png|\.jpe?g|\.gif$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/images/'
            }
        }]
    }
};