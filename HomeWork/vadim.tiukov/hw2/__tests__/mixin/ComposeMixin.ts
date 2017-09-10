import {} from "jest";

import DeletableValue from "../../mixin/DeletableValue";
import DisposableValue from "../../mixin/DisposableValue";
import ReadonlyValue from "../../mixin/ReadonlyValue";

describe("My class", () => {
  class MyClass {
    public value: string;

    constructor(value: string = "my value") {
      this.value = value;
    }
  }

  it("should be combined with DeletableValue and DisposableValue mixin", () => {
    const myClass = DeletableValue(DisposableValue(MyClass));
    const myObject = new myClass();

    expect(myObject.value).toEqual("deleted");

    myObject.dispose();
    expect(myObject.value).toEqual("");
  });

  it("should be composed with ReadonlyValue", () => {
    const myClass = DeletableValue(DisposableValue(ReadonlyValue(MyClass)));
    const myObject = new myClass("my value");

    expect(myObject.value).toEqual("deleted");

    // It"s not valid because of: [ts] Cannot assign to "value" because it is a constant or a read-only property.
    // myObject.value = "new value"

    // But Typescript still allows you change "value" property with mixin methods
    myObject.dispose();
    expect(myObject.value).toEqual("");
  });
});
