import { } from 'jest';
import { assert } from 'chai';
import { Order } from '../src/order';

test('Test get total functionality. Add thee items 2. Expect 6', (): void => {
    // Arrange
    const order: Order = new Order();
    const item: number = 2;
    const expectedTotal: number = 6.3;

    order.addItem(item);
    order.addItem(item);
    order.addItem(item);

    // Act
    order.countTotal(5).then(total => {
        //Assert
        assert.equal(total, expectedTotal, 'Not right total calculation')
    });
});

test('Test countTotal. Add two items 50 and 50,'
    + ' countTotal with 5%, should be returns 105', () => {
        // Arrange
        const order: Order = new Order();
        const item1: number = 50;
        const item2: number = 50;
        const tax: number = 5;
        const expectedResult: number = 105;
        order.addItem(item1);
        order.addItem(item2);

        // Act Assert
        order.countTotal(tax).then(total => {
            assert.equal(total, expectedResult, 'Wrong tax calculation');
        });

    });

test('Test countTotal. Add item 100,'
    + ' countTotal with 101%, should be throw Exception', () => {
        // Arrange
        const order: Order = new Order();
        const item1: number = 100;
        const tax: number = 101;
        order.addItem(item1);

        // Act Assert

        order.countTotal(tax).then(result => {
            assert.throw(() => { }, 'Invalid tax range');
        });
    });