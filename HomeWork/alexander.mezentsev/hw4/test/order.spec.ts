/*
## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)
*/

import {} from 'jest';
import { assert } from 'chai';
import { Order } from '../src/classes/order';

//-------------------------------------
///Sync total count calculation tests
//-------------------------------------

test('Add item. Expect items count increase by one', () => {
    //Arrange
    const order: Order = new Order();
    const initialItemsLength: number = order.ItemsCount;
    const item: number = 2;
    //Act
    order.addItem(item);
    const delta: number = order.ItemsCount - initialItemsLength;
    //Assert
    assert.equal(delta, 1, 'Actual count is not equals 1')
});

test('Test total count. Add two items 50 and 50,' 
    +'countTotal with 5%, should be returned 105', () => {
        //Arrange
        const order: Order = new Order();
        const item1: number = 50;
        const item2: number = 50;
        const tax: number = 5;
        const expectedResult: number = 105;
        order.addItem(item1);
        order.addItem(item2);

        //Act
        const actualResult: number = order.countTotal(tax);

        //Assert
        assert.equal(actualResult, expectedResult, 'Wrong tax calculation')
});

test('Test total count. Add two items 100,' 
    +'countTotal with 101%, should be throw Exeption', () => {
        //Arrange
        const order: Order = new Order();
        const item1: number = 100;
        const tax: number = 101;
        
        order.addItem(item1);
        
        //Act
        assert.throw(() => {
            order.countTotal(tax);
        }, 'Invalid tax range');
});

//-------------------------------------
///Async total count calculation tests
//-------------------------------------
test('Test async total count. Add two items 50 and 50,' 
+'countTotal with 5%, should be returned 105', () => {
    //Arrange
    const order: Order = new Order();
    const item1: number = 50;
    const item2: number = 50;
    const tax: number = 5;
    const expectedResult: number = 105;
    order.addItem(item1);
    order.addItem(item2);

    return order.countTotalAsync(tax).then((actualResult) => {
        assert.equal(actualResult, expectedResult, 'Wrong tax calculation')
    });        
});

test('Test async total count. Add two items 100,' 
+'countTotal with 101%, should be throw Exeption', () => {
    //Arrange
    const order: Order = new Order();
    const item1: number = 100;
    const tax: number = 101;
    
    order.addItem(item1);
    
    //Act
    return order.countTotalAsync(tax).then(
        (actualResult) => {
            assert.fail();
        }, 
        (reject) => {
            assert.equal(reject, 'Invalid tax range', 'Wrong tax calculation')
    });         
});

