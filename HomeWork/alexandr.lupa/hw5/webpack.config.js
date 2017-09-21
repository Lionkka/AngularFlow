var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    entry: {
      commons: ['jquery', 'jquery-validation', 'bootstrap'],
      main: ['./src/ts/main.ts', './src/scss/main.scss']
    },
    output: {
      filename: 'js/[name].js',
      path: path.join(__dirname, 'build')
    },

    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: true
              }
            }
          ]
        },
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                useCache: true
              }
            }
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash].[ext]',
                publicPath: '/',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash].[ext]',
                publicPath: '/',
                outputPath: 'images/'
              }
            }
          ]
        }
      ]
    },

    resolve: {
      alias: {
        jquery: 'jquery/dist/jquery.js',
        bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap'
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.pug',
        filename: 'index.html',
        hash: true
      }),
      new ExtractTextPlugin('css/[name].css'),
      new webpack.DefinePlugin({
        ENV_PRODUCTION: env ? env.production : false,
        version: JSON.stringify('5f73a')
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'js/[name].js'
      })
    ],

    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000,
      inline: true,
      watchOptions: {
        aggregateTimeout: 100,
        poll: true,
        ignored: /node_modules/
      }
    },

    devtool: 'source-map'

  };
}
