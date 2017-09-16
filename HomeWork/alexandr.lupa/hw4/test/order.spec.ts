import { Order } from '../src/order';
import {} from 'jest';
import { assert } from 'chai';

// Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
test('Test countTotal. Add two items 50 and 50,' +
' countTotal with 5%, should be returns 105', () => {

  // Arrange
  const order: Order = new Order();
  const item1: number = 50;
  const item2: number = 50;
  const tax: number = 5;
  const expectedResult: number = 105;

  order.addItem(item1);
  order.addItem(item2);

  // Assert
  return order.countTotal(tax)
    .then((res: number) => {
        assert.equal(expectedResult, res, 'Unexpected output');
    });
});

test('Check tax more than 100. Exception expected', () => {
  // Arrange
  const order: Order = new Order();
  const item: number = 50;
  const tax: number = 101;
  order.addItem(item);

  return order.countTotal(tax).catch(err => {
    assert.instanceOf(err, Error, 'Invalid tax range');
  });
});