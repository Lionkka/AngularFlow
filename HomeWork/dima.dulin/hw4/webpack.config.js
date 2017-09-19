const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/orderUsage.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'inline-source-map'
}
