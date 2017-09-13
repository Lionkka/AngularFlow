import {} from 'jest';
import { assert } from 'chai';
import { Order } from '../src/order';

test('Test addItem, ItemsCount. Add 2 items, expecting itemsCount equal 2', () => {
    const ord: Order = new Order();
    ord.addItem(22);
    ord.addItem(33);

    const count: number = ord.ItemsCount;

    assert.equal(count, 2, 'Wrong length calculating');
});

test('Test countTotal. Input item - 17, tax - 5, expected 17.85', (done: Function):void => {
    const ord: Order = new Order();
    ord.addItem(17);
    const callback: (num: number) => void = (data: number): void => {
        assert.equal(17.85, data, 'Unexpected output');
        done();
    }

    ord.countTotal(5, callback);
});

test('Tax is out of range. Less then null', (): void => {
    const ord: Order = new Order();
    ord.addItem(17);

    assert.throws(()=>{
        ord.countTotal(-1, (): void => {});
    }, 'Invalid tax range');
});

test('Tax is out of range. More then 100%', (): void => {
    const ord: Order = new Order();
    ord.addItem(17);

    assert.throws(()=>{
        ord.countTotal(101, (): void => {});
    }, 'Invalid tax range');
});