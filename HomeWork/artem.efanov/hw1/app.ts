//Implement override method that can retrieve day, month(as number as text format) and year and return Date object
// Override this method for retrieve array of such parameters and retrieve array with dates.

function getDate(day: number, month: number, year: number): Date;
function getDate(day: number, month: string, year: number): Date;
// function getDate(param: [number, number | string, number]): Date[];

function getDate(day: number, month: number | string, year: number): Date{
    if(typeof month === 'number'){
        return new Date(year, month - 1, day);
    }
	return new Date(`${day} ${month} ${year}`);
}

console.log(getDate(1, 'October', 1999));
console.log(getDate(1, 2, 1999));



// Implements to string method. Retrieve different type of object returns string
function metToString<T>(elem: T):string {
	return elem.toString();
}

console.log(metToString<number>(99));


//- Implements valueOf method. Retrieve different type of objects returns true/false.
function genericDiffTupe<T>(value: T): boolean {
	return !!value;
}

console.log(genericDiffTupe<number>(99));
