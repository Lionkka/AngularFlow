import {} from "jest";
import DisposableValue from "../../mixin/DisposableValue";

describe("Disposible value mixin", () => {
  class MyClass {
    public value: string = "my value";
  }

  // tslint:disable-next-line max-classes-per-file
  class MyClassWithDisposableValue extends DisposableValue(MyClass) {}

  it("Should redefine the declared value", () => {
    const myObject = new MyClassWithDisposableValue();

    expect(myObject.value).not.toEqual("my value");
    expect(myObject.value).toEqual("");
  });

  it("Should add the `dispose` method that removes value", () => {
    const myObject = new MyClassWithDisposableValue();

    myObject.value = "My new value";
    expect(myObject.value).toEqual("My new value");

    myObject.dispose();
    expect(myObject.value).toEqual("");
  });
});
