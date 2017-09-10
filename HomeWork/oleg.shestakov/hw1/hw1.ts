
type DateFormat = {day: number, month: number | string, year: number}; // maybe tuple???

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let GetMonth = (month: string, months: string[]) => months.indexOf(month);

function getDate(format: DateFormat): Date {
    let day = format.day;

    let month = null;
    if(typeof format.month == "number") {
        month = format.month;
    } else {
        month = GetMonth(format.month, months);
        if(month == -1)
            throw new Error("Wrong format of month" + format.month);
    }

    let year = format.year;

    return new Date(year, month, day);
}

function getDates(formats: DateFormat[]) : Date[] {
    return formats.map(getDate);
}


// simple implementation
function toString<T>(val: T): string {
    return val + "";
}

// simple implementation
function valueOf<T>(val: T): boolean {
    return !!val;
}




