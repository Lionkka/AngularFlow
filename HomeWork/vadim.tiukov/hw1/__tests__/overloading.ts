import {} from "jest";
import createDate from "../overloading";

describe("Overloading", () => {
  it("Should create a date where the month is the number", () => {
    const day = 1;
    const month = 2;
    const year = 2014;

    const date = createDate(day, month, year);
    expect(date.toLocaleDateString()).toEqual(`${year}-${month}-${day}`);
  });

  it("Should create a date where the month is the string", () => {
    const day = 1;
    const month = "April";
    const year = 2014;

    const date = createDate(day, month, year);
    expect(date.toLocaleDateString()).toEqual(`${year}-4-${day}`);
  });

  it("Should create a date from an array", () => {
    const day = 1;
    const month = 3;
    const year = 2014;

    const date = createDate([day, month, year]);
    expect(date[0].toLocaleDateString()).toEqual(`${year}-${month}-${day}`);
  });
});
