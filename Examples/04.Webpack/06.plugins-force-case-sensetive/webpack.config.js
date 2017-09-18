const path = require('path');
const Plugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    plugins: [ new Plugin() ]

};