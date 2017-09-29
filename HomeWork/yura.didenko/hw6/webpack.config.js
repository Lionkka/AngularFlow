const path = require('path');

module.exports = {
    entry: path.join(__dirname, './srcJs/src/app.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
   watch: false
};