import {} from "jest";
import DeletableValue from "../../mixin/DeletableValue";

describe("Deletable value mixin", () => {
  class MyClass {
    public value: string = "my value";
  }

  // tslint:disable-next-line max-classes-per-file
  class MyClassWithDisposableValue extends DeletableValue(MyClass) {}

  it("Should redefine the declared value", () => {
    const myObject = new MyClassWithDisposableValue();

    expect(myObject.value).not.toEqual("my value");
    expect(myObject.value).toEqual("deleted");
  });

  it("Should add `delete` method that makes value `deleted`", () => {
    const myObject = new MyClassWithDisposableValue();

    myObject.value = "My new value";
    expect(myObject.value).toEqual("My new value");

    myObject.delete();
    expect(myObject.value).toEqual("deleted");
  });
});
