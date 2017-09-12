import {} from 'jest';
import { assert } from 'chai';
import { Math } from '../src/math';

test('Input 1, expected 1', (done: Function):void => {
    const callback:(num:number)=> void = (data:number): void => {
        assert.equal(1, data, 'Unexpected output');
        done();
    }

    Math.factorialAsync(1, callback);
});

test('Check not integer number. Exception expected', (done) => {
    assert.throws(() => {
        Math.factorialAsync(1.1, done());
    }, 'Wrong parameter range');
});

test('Input 1, expected 1', () => {
    return Math.factorialAwait(1)
        .then((data) => {
            assert.equal(1, data, 'Unexpected output');
        })
});