/* Temp workaround to build bundle with Systemjs
    (will include gulp to properly transpile order.ts file before executing Systemjs build) */
const order = require("./order.js");

console.log("orderUsage");