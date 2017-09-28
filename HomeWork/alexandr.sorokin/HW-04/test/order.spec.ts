import { Order } from '../src/order';
import {} from 'jest';
import { assert } from 'chai';

describe('Test Order class', ():void => {
    it('Test get total functionality. Add thee items 2. Expect 6', ():void => {
        // Arrange
        const order: Order = new Order();
        const item: number = 2;
        const expectedTotal:number = 6.3;
    
        order.addItem(item);
        order.addItem(item);
        order.addItem(item);
    
        // Act
        const actualTotal: number = order.countTotal(5); 
    
        //Assert
        assert.equal(actualTotal, expectedTotal, 'Not right total calculation')
    });
    
    it('Add item. Expect items count increase by one', () => {
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
    
    it('Test countTotal. Add two items 50 and 50,'
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
    
    it('Test countTotal. Add item 100,'
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
    
    it('Test asyncCountTotal. Add two items 30 and 70,'
    +' countTotal with 3%, should be returns 103', () => {
        // Arrange
        const order: Order = new Order();
        const item1:number = 30;
        const item2:number = 70;
        const tax:number = 3;
        const expectedResult: number = 103;
        order.addItem(item1);
        order.addItem(item2);
    
        return order.asyncCountTotal(tax).then((data) => {
            assert.equal(data, expectedResult, 'Wrong tax calculation');
        });
    })
    
    it('Test asyncCountTotal. Add item 30,'
    +' countTotal with 103%, should be throw Exception', () => {
        // Arrange
        const order: Order = new Order();
        const item1:number = 30;
        const tax:number = 103;
        order.addItem(item1);
    
        // Act
        order.asyncCountTotal(tax).catch(error => {
            assert.throw(() => {error.message}, 'Invalid tax range');
        });
    })
})