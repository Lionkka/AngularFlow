/**
 * Implement override method that can retrieve day, month(as number as text format) and year and return Date object.
 * Override this method for retrieve array of such parameters and retrieve array with dates.
 */
namespace hw1 {
    export function getDate(day: number, month: number | string, year: number): Date;
    export function getDate(params: Array<[number, number | string, number]>): Array<Date>;

    // SZ you are able to use ...params: any[] here, type any is a hack in most cases but not here
    // SZ NOT for rework
    export function getDate(params: number | Array<[number, number | string, number]>,
                            month?: number | string, year?: number): Date | Array<Date> {
        if (typeof params === 'number') {
            return new Date(year as number, month as number, params);
        }
        let dates: Array<Date> = [];
        for (let i = 0; i < params.length; i++) {
            dates.push(getDate(params[i][0], params[i][1], params[i][2]));
        }
        return dates;
    }
}

console.log(hw1.getDate(11, 22, 3));
console.log(hw1.getDate([[11, 22, 3], [11, 22, 3]]));

