const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/init.ts'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },

    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            hash: true/*,
            template: path.join(__dirname, 'public/index.html')*/
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "jquery",
            filename: "jquery.js"
        })
    ],

    module:{
        loaders:[
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query:{
                    useCache: true
                }
            }
        ]
    },
    watch: false
};