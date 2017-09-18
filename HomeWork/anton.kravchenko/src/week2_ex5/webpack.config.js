const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
var debug = 'production' !== process.env.NODE_ENV;

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader :'url-loader',
                options: {
                        limit: 10000
                }
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }

        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins:[
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production' !== process.env.NODE_ENV),
            VERSION: JSON.stringify("1.0.0"),
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "jquery",
            filename: "jquery.js"
        }),
        extractSass,
        new webpack.ProvidePlugin({
            "$"                   : "jquery",
            "jQuery"              : "jquery",
            "window.jQuery"       : "jquery"
        })
    ],
    devtool: "source-map"
};
