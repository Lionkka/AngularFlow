const path = require('path');

module.exports = {
    entry: path.join(__dirname, './../../build/hw4/orderUsage.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, './../../build/hw4')
    },

    resolve: {
        extensions: ['.js']
    }
};