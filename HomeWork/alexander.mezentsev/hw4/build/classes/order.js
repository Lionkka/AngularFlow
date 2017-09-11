"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)
*/
class Order {
    constructor() {
        this.items = [];
    }
    calculateTax(tax) {
        const total = this.items.reduce((r, i) => {
            return r += i;
        });
        return total + (total / 100) * tax;
    }
    isInvalidTaxRange(tax) {
        return tax > 100 || tax < 0;
    }
    get ItemsCount() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    countTotal(tax) {
        if (this.isInvalidTaxRange(tax)) {
            throw new Error('Invalid tax range');
        }
        return this.calculateTax(tax);
    }
    countTotalAsync(tax) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.isInvalidTaxRange(tax)) {
                    rej('Invalid tax range');
                }
                res(this.calculateTax(tax));
            }, 2000);
        });
    }
}
exports.Order = Order;
