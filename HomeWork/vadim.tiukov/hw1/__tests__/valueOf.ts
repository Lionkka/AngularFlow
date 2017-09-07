import {} from "jest";
import valueOf from "../valueOf";

describe("valueOf", () => {
  it("Throws an error when gets value of undefined", () => {
    expect(() => valueOf(undefined)).toThrow();
  });

  it("Throws an error when gets value of null", () => {
    expect(() => valueOf(null)).toThrow();
  });

  it("Should value of boolean", () => {
    const bool: boolean = true;
    const value: object = valueOf(bool);

    expect(value).toEqual(bool);
    expect(typeof value).toEqual("object");
    expect(typeof bool).toEqual("boolean");
  });

  it("Should value of string", () => {
    const str: string = "Hello";
    const value: object = valueOf(str);

    expect(value).toEqual(str);
    expect(typeof value).toEqual("object");
    expect(typeof str).toEqual("string");
  });

  it("Should value of number", () => {
    const num: number = 2;
    const value: object = valueOf(num);

    expect(value).toEqual(num);
    expect(typeof value).toEqual("object");
    expect(typeof num).toEqual("number");
  });

  it("Should value of object", () => {
    const obj: object = {};
    expect(valueOf(obj)).toEqual(obj);
  });

  it("Should value of enum", () => {
    enum Color {Red, Green, Blue}
    expect(valueOf(Color)).toEqual(Color);
  });

  it("Should value of array", () => {
    const array: string[] = ["string1", "string2"];
    expect(valueOf(array)).toEqual(array);
  });

  it("Should value of tuple", () => {
    const tuple: [number, string] = [1, "string"];
    expect(valueOf(tuple)).toEqual(tuple);
  });

  it("Should value of Date object", () => {
    const date: Date = new Date();
    expect(valueOf(date)).toEqual(date);
  });

  it("Should value of custom object", () => {
    const object: object = {
      valueOf: () => 123,
    };
    expect(valueOf(object)).toEqual(object);
  });
});
