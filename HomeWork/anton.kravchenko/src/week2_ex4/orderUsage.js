// Create orderUsage.js file.
// Require order.js file.
// Create bundle.js file with entry point orderUsage.js with webpack. (see webpack.config.js)

const order = require("./order.ts");

console.log("orderUsage");