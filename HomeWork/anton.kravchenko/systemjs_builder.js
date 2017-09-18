var path = require("path");
var Builder = require('systemjs-builder');

new Builder()
    .bundle('./src/week2_ex4/orderUsage_systemjs.js', 'build/systemjs_bunlde.js')
    .then(function() {
      console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });

