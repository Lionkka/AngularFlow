import {} from 'jest'
import toString from '../toString'

describe('toString', () => {
  it('Should convert undefined to string', () => {
    const variable: undefined = undefined
    const string: string = toString(variable)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('undefined')
  })

  it('Should convert number to string', () => {
    const number: number = 1
    const string: string = toString(number)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('1')
  })

  it('Should convert boolean to string', () => {
    const boolean: boolean = false
    const string: string = toString(boolean)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('false')
  })

  it('Should convert tuple to string', () => {
    const tuple: [number, string] = [1, 'string']
    const string = toString(tuple)

    expect(typeof string).toEqual('string')
    expect(string).toEqual(tuple.toString())
  })

  it('Should convert array to string', () => {
    const array: Array<string> = ['string1', 'string2']
    const string = toString(array)

    expect(typeof string).toEqual('string')
    expect(string).toEqual(array.toString())
  })


  it('Should convert enum to string', () => {
    enum Color {Red, Green, Blue}
    const string = toString(Color)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('[object Object]')
  })

  it('Should convert null to string', () => {
    const string = toString(null)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('null')
  })

  it('Should convert object with implemented toString method to string', () => {
    const object = {
      toString: (): string => 'Hello'
    }
    const string = toString(object)

    expect(typeof string).toEqual('string')
    expect(string).toEqual('Hello')
  })
})
