/**
 * Implement override method that can retrieve day, month(as number as text format) and year and return Date object.
 * Override this method for retrieve array of such parameters and retrieve array with dates.
 */
namespace hw1 {
    export function getDate(day: number, month: number | string, year: number): Date;
    export function getDate(params: Array<number | string>): Array<Date>;

    export function getDate(params: number | Array<number | string>, month?: number | string, year?: number): Date | Array<Date> {
        if (typeof params === 'number') {
            return new Date(year as number, month as number, params);
        }
        if (params.length < 3) {
            for (let i = 0; i < 3; i++) {
                if (typeof params[i] === "undefined") {
                    params[i] = 0;
                }
            }
        }
        return [new Date(params[2] as number, params[1] as number, params[0] as number)];
    }
}

console.log(hw1.getDate(11, 22, 3));
console.log(hw1.getDate([]));

