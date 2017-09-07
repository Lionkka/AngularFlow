/**
 * Implement override method that can retrieve
 * day, month(as number as text format) and year
 * and return Date object
 */
function genericCustomDate(day: number, month: number, year: number): Date;
function genericCustomDate(day: number, month: string, year: number): Date;

function genericCustomDate(day: number, month: number | string, year: number): Date {
    if(typeof month == 'number') {
        if(month == 0) {month += 1;}

        return new Date(year, month - 1, day);
    }


    return new Date(`${year} ${month} ${day}`);
}


console.log(genericCustomDate(1,9, 2017));
console.log(genericCustomDate(1,'September', 2017));

/**
 * Override this method for retrieve array of such
 * parameters and retrieve array with dates.
 */