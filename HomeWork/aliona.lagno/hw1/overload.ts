interface IDate {
    day: number;
    month: number | string;
    year: number;
}

enum Months {
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
}

function getDate(input: IDate): Date;
function getDate(input: IDate[]): Date[];

function getDate(input: IDate | IDate): Date | Date[] {
    if (Array.isArray(input)) {
        return input.map((date) => getDate(date));
    }
    const month = typeof input.month === 'string' ? Months[input.month] : input.month;
    return new Date(input.year, month,  input.day);
}



