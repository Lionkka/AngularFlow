import {} from 'jest'
import { assert } from 'chai'
import { Order } from '../src/order'


describe("Check Order functionality", (): void => {
  test('Test total count. Add two items 50 and 50 countTotal with 5%, should be returned 105', () => {
      //Arrange
      const order: Order = new Order()
      const item1: number = 50
      const item2: number = 50
      const tax: number = 5
      const expectedResult: number = 105
      order.addItem(item1)
      order.addItem(item2)

      //Act
      const actualResult: number = order.countTotal(tax)

      //Assert
      assert.equal(actualResult, expectedResult, 'Wrong tax calculation')
  })

  test('Test total count. Add two items 100, countTotal with 101%, should be throw Exeption', () => {
      //Arrange
      const order: Order = new Order()
      const item1: number = 100
      const tax: number = 101

      order.addItem(item1)

      //Act
      assert.throw(() => {
          order.countTotal(tax)
      }, 'Invalid tax range')
  })

  test('Test async total count. Add two items 50 and 50 countTotal with 5%, should be returned 105', () => {
      //Arrange
      const order: Order = new Order()
      const item1: number = 50
      const item2: number = 50
      const tax: number = 5
      const expectedResult: number = 105
      order.addItem(item1)
      order.addItem(item2)

      return order.countTotalAsync(tax).then((actualResult) => {
          assert.equal(actualResult, expectedResult, 'Wrong tax calculation')
      })        
  })

  test('Test async total count. Should be Error', () => {
      const newOrder: Order = new Order()
      const item: number = 100
      const tax: number = 101

      newOrder.addItem(item)

      return newOrder.countTotalAsync(tax).then(
          actualResult => assert.fail(),
          reject => assert.equal(reject, `Invalid tax range ${tax}`, 'Wrong tax calculation')
      )
  })
})
