import {} from 'jest'
import { assert } from 'chai'
import generateDate from '../src/generateDate'

describe("Check generateDate functionality", (): void => {
  test('Should create a date object where the month is the number', (): void => {
    const year: number = 2015
    const month: number = 2
    const day: number = 1

    const createdDate: Date = generateDate(year, month, day)

    expect(createdDate).toEqual(new Date(year, month, day))
  })

  test('Should create a date object where the month is the string', (): void => {
    const year: number = 2015
    const month: string = 'February'
    const day: number = 5

    const createdDate: Date = generateDate(year, month, day)

    expect(createdDate).toEqual(new Date(year, 2, day))
  })

  test('Should create an array with date object where the month is the number', (): void => {
    const year: number = 2015
    const month: number = 5
    const day: number = 5

    const createdDate: Date[] = generateDate([year, month, day])

    expect(createdDate).toEqual([new Date(year, month, day)])
  })

  test('Should create an array with date object where the month is the string', (): void => {
    const year: number = 2015
    const month: string = 'February'
    const day: number = 5

    const createdDate: Date[] = generateDate([year, month, day])

    expect(createdDate).toEqual([new Date(year, 2, day)])
  })
})
