import {} from 'jest'
import valueOf from '../valueOf'

describe('valueOf', () => {
  it('Throws an error when gets value of undefined', () => {
    expect(() => valueOf(undefined)).toThrow()
  })

  it('Throws an error when gets value of null', () => {
    expect(() => valueOf(null)).toThrow()
  })

  it('Should value of boolean', () => {
    const bool: boolean = true
    const value: object = valueOf(bool)

    expect(value).toEqual(bool)
    expect(typeof value).toEqual('object')
    expect(typeof bool).toEqual('boolean')
  })

  it('Should value of string', () => {
    const string: string = 'Hello'
    const value: object = valueOf(string)

    expect(value).toEqual(string)
    expect(typeof value).toEqual('object')
    expect(typeof string).toEqual('string')
  })

  it('Should value of number', () => {
    const number: number = 2
    const value: object = valueOf(number)

    expect(value).toEqual(number)
    expect(typeof value).toEqual('object')
    expect(typeof number).toEqual('number')
  })

  it('Should value of object', () => {
    const object: object = {}
    expect(valueOf(object)).toEqual(object)
  })

  it('Should value of enum', () => {
    enum Color {Red, Green, Blue}
    expect(valueOf(Color)).toEqual(Color)
  })

  it('Should value of array', () => {
    const array: Array<string> = ['string1', 'string2']
    expect(valueOf(array)).toEqual(array)
  })

  it('Should tuple of array', () => {
    const tuple: [number, string] = [1, 'string']
    expect(valueOf(tuple)).toEqual(tuple)
  })

  it('Should value of Date object', () => {
    const date: Date = new Date
    expect(valueOf(date)).toEqual(date)
  })

  it('Should custom object of array', () => {
    const object: object = {
      valueOf: () => 123
    } 
    expect(valueOf(object)).toEqual(object)
  })
})
