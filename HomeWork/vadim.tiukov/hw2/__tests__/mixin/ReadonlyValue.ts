import {} from "jest";
import ReadonlyValue from "../../mixin/ReadonlyValue";

describe("Readonly value mixin", () => {
  class MyClass {
    public value: string;

    constructor(value: string = "my value") {
      this.value = value;
    }
  }

  // tslint:disable-next-line max-classes-per-file
  class MyClassWithReadonlyValue extends ReadonlyValue(MyClass) {}

  it("Should not be frozen. Readonly modifier is only check during compilation", () => {
    const myObject = new MyClassWithReadonlyValue();

    expect(Object.isFrozen(myObject)).toBeFalsy();
  });

  it("Can be constructed with the default value", () => {
    const myObject = new MyClassWithReadonlyValue();

    expect(myObject.value).toEqual("my value");
  });

  it("Can be constructed with a custom value", () => {
    const myValue = "42";
    const myObject = new MyClassWithReadonlyValue(myValue);

    expect(myObject.value).toEqual(myValue);
  });
});
