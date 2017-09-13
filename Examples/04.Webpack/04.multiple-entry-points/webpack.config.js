const path = require('path');

module.exports = {
    entry: {
        admin: path.join(__dirname, './src/home.js'),
        application: path.join(__dirname, './src/order.js')
    },

    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    }
};