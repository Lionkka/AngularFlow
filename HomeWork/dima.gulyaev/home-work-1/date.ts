// Implement override method that can retrieve day, month(as number as text format) and year and return Date object

function overloadingDate(day: number, month: number, year: number): Date;
function overloadingDate(day: number, month: string, year: number): Date;

function overloadingDate(day: number, month: number | string, year: number): Date {
    if(typeof month == 'number') {
        if(month == 0) {month += 1;}

        return new Date(year, month - 1, day);
    }

    return new Date(`${day} ${month} ${year}`);
}

console.log(overloadingDate(30,'April', 1987));
console.log(overloadingDate(7, 1, 2017));