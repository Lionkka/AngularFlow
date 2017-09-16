import { Order } from './../../src/hw4/Order';
import {} from 'jest';
import { assert } from 'chai';
import {defaultRetrieveFileHandler} from "ts-jest/dist/default-retrieve-file-handler";

test('Add item. Expect items count increase by one', (done:Function):void => {
    // Arrange
    const order: Order = new Order();
    const item = 2;

    //Act
    let orderInitialCount:number = 0;
    order.ItemsCount.then((initialCount:number):Promise<void> => {
        orderInitialCount = initialCount;
        return order.addItem(item);
    }).then(():Promise<number> => {
        return order.ItemsCount;
    }).then((orderNewCount:number):void => {
        const diff: number = orderNewCount - orderInitialCount;

        //Assert
        assert.equal(diff, 1, 'Actual count is not equals 1');
        done();
    });
});

test('Test countTotal. Add two items 50 and 50,'
    +' countTotal with 5%, should be returns 105', (done:Function):void => {
    // Arrange
    const order: Order = new Order();
    const item1:number = 50;
    const item2:number = 50;
    const tax:number = 5;
    const expectedResult: number = 105;
    const afterAddPromise = order.addItem(item1)
        .then(():Promise<void> => {
            return order.addItem(item2);
        }
    );

    // Assert
    const callback:(num:number)=> void = (actualResult:number): void => {
        assert.equal(actualResult, expectedResult, 'Wrong tax calculation');
        done();
    };

    // Act
    afterAddPromise.then(():void => {
        order.countTotal(tax, callback);
    });
});

test('Test countTotal. Add item 100,'
    +' countTotal with 101%, should be throw Exception', (done:Function):void => {
    // Arrange
    const order: Order = new Order();
    const item1: number = 100;
    const tax: number = 101;
    const afterAddPromise = order.addItem(item1);

    afterAddPromise.then(():void => {
        // Act
        assert.throw(():void => {
            order.countTotal(tax, done());
        }, 'Invalid tax range g');
    });
});