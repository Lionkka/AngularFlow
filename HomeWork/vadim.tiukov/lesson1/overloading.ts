function createDate(day: [number, string | number, number]): Array<Date>;
function createDate(day: number, month: string | number, year: number): Date;

function createDate(day: [number, string | number, number] | number, month?: string | number, year?: number): Date|Array<Date> {
  if (Array.isArray(day)) {
    return [createDate(day[0], day[1], day[2])];
  }

  return new Date(`${year}-${month}-${day}`)
}

export default createDate
