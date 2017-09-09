'use strict';

/**
 * 
 * Implement override method that 
 * can retrieve day, month(as number as text format)
 * and year and return Date object
 */

/**
 * 
 * Override this method for retrieve array of such parameters and retrieve array with dates.
 */
function getDate(day:number, month:number, year: number): Date;
function getDate(day:number, month:string, year: number): Date;
function getDate(...arrayOfDates: Array<any>): Date;

function getDate(...arrayOfDates: Array<any>): Date | Array<Date>{
    if(arrayOfDates[0] instanceof Array){        
        return arrayOfDates[0].map((date)=>{
            const [year, month, day] = date;
            return retrieveDate(date[0], date[1], date[2]);
        })
    }
    return retrieveDate(arrayOfDates[0], arrayOfDates[1], arrayOfDates[2]);
}

function retrieveDate(day:number, month:string | number, year: number): Date{
    if(typeof month === 'string'){
        return new Date(`${year} ${month} ${day} `);
    }
    month --; // decrement month, because month starts from zero
    return new Date(year, month, day);
}

console.log(getDate(1,5,2017));
console.log(getDate(1,'May',2017));

const datesArray = [
    [1,'May',2017],
    [1,5,2017]];
console.log(getDate(datesArray));