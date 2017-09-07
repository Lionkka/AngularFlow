import { MonthList } from './enums/MonthList'
// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
function error(message: string): never {
    throw new Error(message)
}

function handleMonth(month: string | number): number {
    if (typeof month === 'string') {
        return MonthList[month]
    } else {
        return month
    }
}

function generateDate(year: number, month: string | number, day: number): Date;
function generateDate(dateArray: [number, string | number, number]): Date [];
function generateDate(...dateArray: any[]): any {
    if (dateArray.length === 3) {
        return new Date(dateArray[0], handleMonth(dateArray[1]), dateArray[2])
    } else {
        return [new Date(dateArray[0][0], handleMonth(dateArray[0][1]), dateArray[0][2])]
    }
};

// test generateDate
console.log(generateDate(2015, 2, 1))
console.log(generateDate(2012, 'February', 5))
console.log(generateDate([2012, 2, 5]))
console.log(generateDate([2012, 'February', 5]))

// Implements to string method. Retrieve different type of object returns string
function customToString(data: string | number | boolean | object): string;
function customToString(data: any): string {
    if (typeof data === 'string') {
        return data
    } else if (Array.isArray(data)) {
        return data.join('')
    } else if (typeof data === 'boolean' || typeof data === 'object' || typeof data === 'number') {
        return data.toString()
    } else {
      return error('Something failed')
    }
}

// test customToString
console.log(customToString(true))
console.log(customToString(false))
console.log(customToString([1, [1,3]]))
console.log(customToString([]))
console.log(customToString(35))
console.log(customToString('er2'))
console.log(customToString({}))

// Implements valueOf method. Retrieve different type of objects returns true/false.
function customValueOf(data: string | number | boolean | object): boolean;
function customValueOf(data: any): boolean {
    if (typeof data === 'string') {
        return data.length ? true : false
    } else if (typeof data === 'number') {
        return true
    } else if (typeof data === 'boolean') {
        return data
    } else if (Array.isArray(data)) {
        return data.length ? true : false
    } else if (typeof data === 'object') {
        return true
    }
}

// test customValueOf
console.log(customValueOf(''))
console.log(customValueOf('test'))
console.log(customValueOf(4))
console.log(customValueOf(true))
console.log(customValueOf(false))
console.log(customValueOf([]))
console.log(customValueOf([1, 4]))
console.log(customValueOf({}))
