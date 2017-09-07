// Task #1, Task#2
function generateDate(): Date;
function generateDate(day: number, month: number | string, year: number): Date;
function generateDate(day: [[number, number, number]]): Array<Date>;

function generateDate(day?: number | [[number, number| string, number]], month?: number | string, year?: number): Date | Array<Date> {
    if (!day) {
        return new Date();
    } else if (month) {
        return new Date(`${year} ${month} ${day}`);
    } else if (typeof day === 'object') {
        let dateList: Date[] = [];
        for (let i = 0; i < day.length; i++) {
            let dateItem: Date = new Date(...day[i]);
            dateList.push(dateItem);
        }
        return dateList;
    }
};

console.log(generateDate());
console.log(generateDate(23, 7, 2017));
console.log(generateDate(23, 'September', 2017));
console.log(generateDate([[2010, 3, 2], [2015, 5, 19]]));
///////////////////////////////////////////////////////////////////////////////////////


// Task #3
function ToString<T>(value: T): string {
    return value.toString();
}

console.log(ToString<number>(6));
console.log(ToString<Array<number>>([2,4,6]));
//////////////////////////////////////////////////////////////////////////////////////


// Task #4
function ValueOf<T>(value: T): boolean {
    return !!value;
}

console.log(ValueOf<number>(6));
console.log(ValueOf<string>('test'));