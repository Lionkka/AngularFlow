/*  Implement override method that can retrieve day, month(as number as text format) and year and return Date object
    Override this method for retrieve array of such parameters and retrieve array with dates. */

// SZ classes, enums and interfaces should be implemented in separete file.
interface ICustomDate {
    day: number;
    month: number | string;
    year: number;
}

// SZ At this course each property of enum should has a value.
enum monthes {
    january, february, march, april, may, june, july, august, september, october, november, december
} 

function over(day: Array<ICustomDate>): Array<Date>;
function over(day: number, month: number | string, year: number): Date;

function over(day: number | Array<ICustomDate>, month?: number | string, year?: number): Array<Date> | Date {
    let d: Array<Date> | Date;
    if(typeof day === 'object') { // it isn't day
        d = [];
        for(let i = 0; i < day.length; i++) {
            if(typeof day[i].month === 'number') {
                d.push(new Date(day[i].year, Number(day[i].month), day[i].day));
            }
            if(typeof day[i].month === 'string') {
                let temp: string = String(day[i].month);
                d.push(new Date(day[i].year, monthes[temp.toLowerCase()], day[i].day));
            }
        }
    }
    if(typeof day === 'number') {
        if(typeof month === 'number') {
            d = new Date(year, month, day);
        }
        if(typeof month === 'string') {
            d = new Date(year, monthes[month.toLowerCase()], day);
        }
    }

    return d;
}

let first_call: Date = over(1, 1, 1);
console.log(first_call);

let second_call: Date = over(12, 'June', 1091);
console.log(second_call);

let cdate: Array<ICustomDate> = [];
let tempdate: ICustomDate = { day: 1, month: 'September', year: 1939};
cdate.push(tempdate);
cdate.push({ day: 2, month: 8, year: 1945 });

let third_call: Array<Date> = over(cdate);

for(let i = 0; i < third_call.length; i++) {
    console.log(third_call[i]);
}

/*  Implements to string method. Retrieve different type of object returns string
    Implements valueOf method. Retrieve different type of objects returns true/false. */

/* It's nothing here yet */