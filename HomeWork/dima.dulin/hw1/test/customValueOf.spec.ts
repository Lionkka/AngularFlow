import {} from 'jest'
import { assert } from 'chai'
import customValueOf from '../src/customValueOf'

describe('Check customValueOf functionality', (): void => {
  test('Should return a boolean where the data is empty string', (): void => {
    const data: string = ''
    const transformedData: boolean = false

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be false')
  })

  test('Should return a boolean where the data is string', (): void => {
    const data: string = 'Test'
    const transformedData: boolean = true

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be true')
  })

  test('Should return a boolean where the data is number', (): void => {
    const data: number = 5
    const transformedData: boolean = true

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be true')
  })

  test('Should return a boolean where the data is boolean', (): void => {
    const data: boolean = false
    const transformedData: boolean = false

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be boolean')
  })

  test('Should return a boolean where the data is array', (): void => {
    const data: number[] = [1, 3, 5]
    const transformedData: boolean = true

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be true')
  })

  test('Should return a boolean where the data is object', (): void => {
    const data: Object = {}
    const transformedData: boolean = true

    const checkFunction: boolean = customValueOf(data)

    assert.equal(checkFunction, transformedData, 'The value of data must be true')
  })
})
