"use strict";
function overloadingDate(day, month, year) {
    if (typeof month == 'number') {
        if (month == 0) {
            month += 1;
        }
        return new Date(year, month - 1, day);
    }
    return new Date(day + " " + month + " " + year);
}
console.log(overloadingDate(30, 'April', 1987));
console.log(overloadingDate(7, 1, 2017));
