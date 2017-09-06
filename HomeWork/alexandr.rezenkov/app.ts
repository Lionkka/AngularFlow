//1.
function convertToDate(day: number, month: string, year: number): Date;
function convertToDate(day: number, month: number, year: number): Date;


function convertToDate(day: number, month: number | string, year: number): Date {
    if (typeof month === 'number')
        return new Date(year, month, day);
    else
        return new Date(`${year} ${month} ${day}`);
}

console.log(convertToDate(12, 10, 2017));
console.log(convertToDate(12, 'November', 2017));

//2. второе не совсем понял 
//function convertToDate2([day, mounth, year]: [number, number | string, number]): Date;
//function convertToDate2(params: Date[]): Date;

//function convertToDate2([day, mounth, year]: [number, number | string, number] | Date[]): Date {
//    return new Date();
//}

//3.
function ToString<T>(param: T): string {
    return param.toString();
}

console.log(ToString<number>(2));

//4.
function ValueOf<T>(param: T): boolean {
    return !!param;
}

console.log(ValueOf<number>(45));
