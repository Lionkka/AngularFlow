import {} from 'jest'
import { assert } from 'chai'
import Circle from '../src/circle'

describe("Check circle functionality", (): void => {
  test('Should be positive check radius', (): void => {
    const dataCircleX: number = 2
    const dataCircleY: number = 2
    const dataCircleRadius: number = 1

    const circle = new Circle(dataCircleX, dataCircleY, dataCircleRadius)
    const result = circle.checkRadius(dataCircleRadius)

    assert.equal(dataCircleRadius, result, 'The value of data must be number of radius')
  })

  test('Should be error check radius with more then 100', (): void => {
    const dataCircleX: number = 2
    const dataCircleY: number = 2
    const dataCircleRadius: number = 101
    const errorText: string = `Invalid number of ${dataCircleRadius}`

    const circle = new Circle(dataCircleX, dataCircleY, dataCircleRadius)

    assert.throw(() => circle.checkRadius(dataCircleRadius), errorText)
  })

  test('Should be error check radius with less then 0', (): void => {
    const dataCircleX: number = 2
    const dataCircleY: number = 2
    const dataCircleRadius: number = -1
    const errorText: string = `Invalid number of ${dataCircleRadius}`

    const circle = new Circle(dataCircleX, dataCircleY, dataCircleRadius)

    assert.throw(() => circle.checkRadius(dataCircleRadius), errorText)
  })

  test('Should be number after calculate square', (): void => {
    const dataCircleX: number = 2
    const dataCircleY: number = 2
    const dataCircleRadius: number = 2
    const expectedResult: number = Math.PI * dataCircleRadius * dataCircleRadius

    const circle = new Circle(dataCircleX, dataCircleY, dataCircleRadius)
    const result: number = circle.calculateSquare()

    assert.equal(result, expectedResult, 'The value of data must be number of calculate square')
  })

  test('Should be error check calculate perimeter', (): void => {
    const dataCircleX: number = 2
    const dataCircleY: number = 2
    const dataCircleRadius: number = 5
    const expectedResult: number = Math.PI * 2 * dataCircleRadius

    const circle = new Circle(dataCircleX, dataCircleY, dataCircleRadius)
    const result: number = circle.calculatePerimeter()

    assert.equal(result, expectedResult, 'The value of data must be number of calculate perimeter')
  })

})
