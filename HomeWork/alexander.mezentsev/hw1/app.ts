//## Homework 1 ##

////- Implement override method that can retrieve day, month(as number as text format) and year and return Date object
////- Override this method for retrieve array of such parameters and retrieve array with dates.

import {Months} from "./enums/months";
import {DateParams} from "./types/dateParams";

function getDate(day: number, month: number | string, year: number): Date;
function getDate(day: DateParams | DateParams[]): Date[];

function getDate(day: number | DateParams | DateParams[], month?: number | string, year?: number): Date | Date[] {
    if(Array.isArray(day)){
        let result: Array<Date> = [];
        for (let param of day) {
            let paramIsArray: boolean = Array.isArray(param);
            result.push(getDate.apply(getDate, paramIsArray ? param : day));
            if(!paramIsArray) break;
        }
        return result;        
    }
    return new Date(
        Number(year), 
        (typeof month === 'string' ? Months[month] : Number(month)) - 1, 
        Number(day)
    );
}

console.log(getDate(1, 9, 2017).toLocaleDateString());
//01.09.2017
console.log(getDate(2, 'September', 2017).toLocaleDateString());
//02.09.2017
console.log(getDate([3, 'September', 2017]).map((date: Date) => date.toLocaleDateString()));
//Array [ "03.09.2017" ]
let datesParamsArray: Array<DateParams> = [[4, 'September', 2017], [5, 09, 2017], [17, 9, 2017]];
console.log(getDate(datesParamsArray).map((date: Date) => date.toLocaleDateString()));
//Array [ "04.09.2017", "05.09.2017", "17.09.2017" ]


////- Implements to string method. Retrieve different type of object returns string

function toString(arg: any): string {
    return String(arg).toString();
}

console.log(toString({}));//'[object Object]'
console.log(toString(''));// ''
console.log(toString(null));//'null'
console.log(toString(void 0));//'undefined'


//- Implements valueOf method. Retrieve different type of objects returns true/false.

function valueOf<T>(param: T): boolean {
    if (typeof(param) === "undefined" || param === null) {
        return false;
    }
    if (Array.isArray(param)){
        return !!param.length;
    }
    return !!param.valueOf();
}

console.log(valueOf<object>({}));//true
console.log(valueOf<string>(''));//false
console.log(valueOf<string>('test value'));//true
console.log(valueOf<null>(null));//false
console.log(valueOf<undefined>(void 0));//false
console.log(valueOf<any[]>([]));///false
console.log(valueOf<any[]>([1,2,3]));//true

export {
    getDate,
    toString,
    valueOf
}