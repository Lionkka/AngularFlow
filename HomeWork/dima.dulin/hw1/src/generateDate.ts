import handleMonth from './utils/handleMonth'
// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
function generateDate(year: number, month: string | number, day: number): Date;
function generateDate(dateArray: [number, string | number, number]): Date [];
function generateDate(...dateArray: any[]): any {
    if (dateArray.length === 3) {
        return new Date(dateArray[0], handleMonth(dateArray[1]), dateArray[2])
    } else {
        return [new Date(dateArray[0][0], handleMonth(dateArray[0][1]), dateArray[0][2])]
    }
};

export default generateDate
