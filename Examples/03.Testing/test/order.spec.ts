import { Order } from '../src/order';
import {} from 'jest';
import { assert } from 'chai';

test('Add item. Expect items count increase by one', () => {
    // Arrange
    const order: Order = new Order();
    const orderInitialCount: number = order.ItemsCount;
    const item = 2;

    //Act
    order.addItem(item);
    const diff: number = order.ItemsCount - orderInitialCount;

    //Assert
    assert.equal(diff, 1, 'Actual count is not equals 1');
});

test('Test countTotal. Add two items 50 and 50,'
        +' countTotal with 5%, should be returns 105', () => {
    // Arrange
    const order: Order = new Order();
    const item1:number = 50;
    const item2:number = 50;
    const tax:number = 5;
    const expectedResult: number = 105;
    order.addItem(item1);
    order.addItem(item2);

    // Act
    const actualResult: number = order.countTotal(tax);

    // Assert
    assert.equal(actualResult, expectedResult, 'Wrong tax calculation');
});

test('Test countTotal. Add item 100,'
+' countTotal with 101%, should be throw Exception', () => {
// Arrange
const order: Order = new Order();
const item1: number = 100;
const tax: number = 101;
order.addItem(item1);

// Act
assert.throw(()=>{
        order.countTotal(tax);
    }, 'Invalid tax range');
});