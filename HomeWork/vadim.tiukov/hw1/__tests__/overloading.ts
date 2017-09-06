import {} from 'jest'
import createDate from '../overloading'


describe('overloading', () => {
  it('should create date where month is number', () => {
    const day = 1;
    const month = 2;
    const year = 2014;

    const date = createDate(day, month, year);
    expect(date.toLocaleDateString()).toEqual(`${year}-${month}-${day}`)
  })

  it('should create date where month is string', () => {
    const day = 1;
    const month = 'April';
    const year = 2014;

    const date = createDate(day, month, year);
    expect(date.toLocaleDateString()).toEqual(`${year}-4-${day}`)
  })

  it('should create date from array', () => {
    const day = 1;
    const month = 3;
    const year = 2014;

    const date = createDate([day, month, year]);
    expect(date[0].toLocaleDateString()).toEqual(`${year}-${month}-${day}`)
  })
})
