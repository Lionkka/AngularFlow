/**
 * Implement override method that can retrieve
 * day, month(as number as text format) and year
 * and return Date object
 */

/**
 * Override this method for retrieve array of such
 * parameters and retrieve array with dates.
 */
function genericCustomDate(day: number, month: number, year: number): Date;
function genericCustomDate(day: number, month: string, year: number): Date;
function genericCustomDate(day: number, month: number | string, year: number): Date;
function genericCustomDate(...args:any[]): Date[] | Date {
    if (Array.isArray(args[0])) {
        return args.map(function (arg): Date {
            return createDate(arg[0], arg[1], args[2])
        });
    }

    return createDate(args[0], args[1], args[2])
}

function createDate(day: number, month: number | string, year: number): Date {
    if (typeof month == 'number') {
        return new Date(year, month, day);
    }

    return new Date(`${year} ${month} ${day}`);
}

console.log(genericCustomDate(1, 9, 2017));
console.log(genericCustomDate(1, 'September', 2017));
console.log(genericCustomDate([1, 'September', 2017]));
