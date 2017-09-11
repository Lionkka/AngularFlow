/*
## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)
*/

import { Order } from '../classes/order'

const order: Order = new Order();
const item1: number = 50;
const item2: number = 50;
const tax: number = 5;
order.addItem(item1);
order.addItem(item2);

console.log(order.countTotal(tax))