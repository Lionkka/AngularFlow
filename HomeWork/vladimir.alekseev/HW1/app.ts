//## Homework 1 ##

/* Task 1, Task 2
- Implement override method that can retrieve day, month(as number as text format) and year and return Date object
- Override this method for retrieve array of such parameters and retrieve array with dates.
*/

import { myMonths } from "./months.enum"
import { customToString } from "./tostring.custom"
import { customValueOf } from "./valueof.custom"

function createOverloadedDate(): Date;
function createOverloadedDate(day: number, month: number|string, year: number): Date | Date[];
function createOverloadedDate(tople: [[number, string|number, number]] ): Date[];
function createOverloadedDate(...params: any[]): Date | Date[]{

    
    if (Array.isArray(params[0])){
        return params[0].map((tupleValue) => {
            let _tupleMonthsValue: number = typeof tupleValue[1] === 'string' ? myMonths[tupleValue[1]] : tupleValue[1];
            return new Date(tupleValue[2], _tupleMonthsValue, tupleValue[0]);
        });
    } else {
        if (typeof params[0] !== 'number'){
            return new Date();
        } else {
            let _month: number = typeof params[1] === 'string' ? myMonths[params[1]] : params[1];
            return new Date(params[2], _month, params[0]);
        } 
    }
};

console.log(createOverloadedDate());
console.log(createOverloadedDate(2, 0, 2018));
console.log(createOverloadedDate(30, 'February', 2016));
console.log(createOverloadedDate([[5, 'September', 2017], [31, 11, 2017]]).join(', '));

/* Result in console for Task1 and Task2
2017-09-12T12:24:12.800Z
2018-01-01T22:00:00.000Z
2016-02-29T22:00:00.000Z
Tue Sep 05 2017 00:00:00 GMT+0300 (Финляндия (лето)), Sun Dec 31 2017 00:00:00 GMT+0200 (Финляндия (зима))
*/


console.log(customToString<number>(666));
console.log(customToString<string>('test string'));
console.log(customToString<object>(null));
console.log(customToString<object>({}));

/* Result in console for Task3
666
test string
null
[object Object]
*/


console.log(customValueOf<number>(666));
console.log(customValueOf<string>('test string'));
console.log(customValueOf<object>(null));
console.log(customValueOf<object>({}));
console.log(customValueOf<object>(():void => console.log('DONE!')));

/* Result in console for Task4
true
true
false
true
true
*/
