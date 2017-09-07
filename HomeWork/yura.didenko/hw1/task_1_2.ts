/**
 *Implement override method that can retrieve day, month(as number as text format) and year and return Date object
 *Override this method for retrieve array of such parameters and retrieve array with dates.
 */

'use strict';
function getDate(day:number, month:number|string, year:number):Date;
function getDate(dateConfig: [number,string] | [number] ):Date[];
/**
 *
 * @param args
 * @returns {Date | Date[]}
 */
function getDate(...args):Date | Date[] {

    if (!Array.isArray(args[0])) {
        return new Date(`${args[0]}, ${args[1]}, ${args[2]}`);
    }

    return [new Date(`${args[0][0]}, ${args[0][1]}, ${args[0][2]}`)]
}

getDate(3, 'August', 15);
getDate([3, 7, 15]);