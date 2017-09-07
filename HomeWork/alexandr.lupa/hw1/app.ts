// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
// Override this method for retrieve array of such parameters and retrieve array with dates.

function overrideFunction(day: number, month: number | string, year: number): Date;
function overrideFunction(params: [number, string | number, number][]): Date[];

// FIXED // SZ missed type for args, should be array of any.
// SZ type any is a hack, but it's ok to use it for this task. - NOT for rework.
function overrideFunction(...args: any[]): Date | Date[] {

  const createDate = (day: number, month: number | string, year: number): Date => {
    if (typeof month === 'string') {
      return new Date(`${month} ${day}, ${year}`);
    }

    return new Date(year, month, day);
  };

  if (Array.isArray(args[0])) {
    return args.map(dateArgs => createDate(dateArgs[0], dateArgs[1], dateArgs[2]));
  }

  return createDate(args[0], args[1], args[2]);
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