import {} from "jest";
import toString from "../toString";

describe("toString", () => {
  it("Should convert undefined to string", () => {
    const variable: undefined = undefined;
    const myString: string = toString(variable);

    expect(typeof myString).toEqual("string");
    expect(myString).toEqual("undefined");
  });

  it("Should convert number to string", () => {
    const num: number = 1;
    const str: string = toString(num);

    expect(typeof str).toEqual("string");
    expect(str).toEqual("1");
  });

  it("Should convert boolean to string", () => {
    const bool: boolean = false;
    const str: string = toString(bool);

    expect(typeof str).toEqual("string");
    expect(str).toEqual("false");
  });

  it("Should convert tuple to string", () => {
    const tuple: [number, string] = [1, "string"];
    const str = toString(tuple);

    expect(typeof str).toEqual("string");
    expect(str).toEqual(tuple.toString());
  });

  it("Should convert array to string", () => {
    const array: string[] = ["string1", "string2"];
    const str = toString(array);

    expect(typeof str).toEqual("string");
    expect(str).toEqual(array.toString());
  });

  it("Should convert enum to string", () => {
    enum Color {Red, Green, Blue}
    const str = toString(Color);

    expect(typeof str).toEqual("string");
    expect(str).toEqual("[object Object]");
  });

  it("Should convert null to string", () => {
    const str = toString(null);

    expect(typeof str).toEqual("string");
    expect(str).toEqual("null");
  });

  it("Should convert an object with the implemented `toString` method to the string", () => {
    const obj = {
      toString: (): string => "Hello",
    };
    const str = toString(obj);

    expect(typeof str).toEqual("string");
    expect(str).toEqual("Hello");
  });
});
