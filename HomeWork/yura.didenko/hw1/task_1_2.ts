'use strict';
/**
 *Implement override method that can retrieve day, month(as number as text format) and year and return Date object
 *Override this method for retrieve array of such parameters and retrieve array with dates.
 */
function getDate(day:number, month:number|string, year:number):Date;
function getDate(dateConfig:[number,string] | [number]):Date[];
/**
 *
 * @param dateConfig
 * @param month
 * @param year
 * @returns {Date | Date[]}
 */
function getDate(dateConfig:number | [number,string] | [number], month?:number|string, year?:number):Date | Date[] {

    if (Array.isArray(dateConfig)) {
        return new Date(`${dateConfig[0]}, ${dateConfig[1]}, ${dateConfig[2]}`);
    }

    return [new Date(`${dateConfig}, ${month}, ${year}`)]

}

getDate(3, 'August', 15);
getDate([3, 7, 15]);