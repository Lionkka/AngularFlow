// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
// Override this method for retrieve array of such parameters and retrieve array with dates.

function overrideFunction(day: number, month: number | string, year: number): Date;
function overrideFunction(params: [number, string | number, number][]): Date[];

function overrideFunction(...args) {
  const createDate = dateArgs => {
    if (typeof dateArgs[1] === 'string') {
      return new Date(`${dateArgs[1]} ${dateArgs[0]}, ${dateArgs[2]}`);
    }

    return new Date(dateArgs[2], dateArgs[1], dateArgs[0]);
  };

  if (Array.isArray(args[0])) {
    return args.map(dateArgs => createDate(dateArgs));
  }

  return createDate(args);
}

overrideFunction(25, 7, 1994);
overrideFunction(25, 'August', 1994);
overrideFunction([[25, 7, 1994], [25, 'August', 1994]]);


// Implements to string method. Retrieve different type of object returns string
function customToString(obj: any): string {
  return obj.toString();
}


// Implements valueOf method. Retrieve different type of objects returns true/false.
function customValueOf(obj: any): boolean {
  return !!obj;
}