import {} from 'jest'
import { assert } from 'chai'
import customToString from '../src/customToString'

describe("Check customToString functionality", (): void => {
  test('Should create a string where the data is boolean type', (): void => {
    const data: boolean = true
    const transformedData: string = 'true'

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The boolean type transformed to string type')
  })

  test('Should create a string where the data is array', (): void => {
    const data: number[] = [1, 2, 3]
    const transformedData: string = '123'

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The array transformed to string type')
  })

  test('Should create a string where the data is empty array', (): void => {
    const data: number[] = []
    const transformedData: string = ''

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The empty array transformed to string type')
  })

  test('Should create a string where the data is number type', (): void => {
    const data: number = 5
    const transformedData: string = '5'

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The number type transformed to string type')
  })

  test('Should create a string where the data is string type', (): void => {
    const data: string = 'Test'
    const transformedData: string = 'Test'

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The string type transformed to string type')
  })

  test('Should create a string where the data is object', (): void => {
    const data: Object = {}
    const transformedData: string = data.toString()

    const checkFunction: string = customToString(data)

    assert.equal(checkFunction, transformedData, 'The Object type transformed to string type')
  })
})
