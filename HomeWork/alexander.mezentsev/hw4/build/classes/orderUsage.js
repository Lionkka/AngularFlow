"use strict";
/*
## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../classes/order");
const order = new order_1.Order();
const item1 = 50;
const item2 = 50;
const tax = 5;
order.addItem(item1);
order.addItem(item2);
console.log(order.countTotal(tax));
