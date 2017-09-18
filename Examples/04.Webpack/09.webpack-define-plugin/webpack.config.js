var path = require('path');
var webpack =require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js']
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV: 'dev',
            version: JSON.stringify('5f73a'),
            BROWSER_SUPPORT_HTML5: false,
        })
    ]

};