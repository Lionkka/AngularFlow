//# 1
// Implement override method that can retrieve day, 
// month(as number as text format) and year and return Date object
// # 2
// Override this method for retrieve array of such parameters and retrieve array with dates.

function getMyDate(day: number, month: number | string, year: number): Date;
function getMyDate(dateArray: [number, number | string, number]): Date[];

function getMyDate(...param: any[]) {
	function generateDate(dateParams: any[]) {
		if (typeof dateParams[1] === 'string') {
			return new Date(`${dateParams[1]} ${dateParams[0]}, ${dateParams[2]}`);
		} else {
			return new Date(dateParams[1],dateParams[0],dateParams[2]);
		}
	}
	
	if (Array.isArray(param[0])) {
		return param.map(function (dateArray) {
			return generateDate(dateArray);
		});
	}
	
	return generateDate(param);
}

console.log(getMyDate(16, 1, 1987));
console.log(getMyDate(23, 'September', 2016));
console.log(getMyDate([23, 'September', 2016]));

// # 3 Implements to string method. Retrieve different type of object returns string

function myToString<T>(param: T): string {
	return param.toString();
}

// #4 Implements valueOf method. Retrieve different type of objects returns true/false.

function myValueOf<T>(param: T): boolean {
	return !!param;
}

console.log(myToString<number>(24));
console.log(myValueOf<number>(3));


