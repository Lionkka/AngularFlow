import {} from 'jest';
import ReadonlyValue from '../../mixin/ReadonlyValue';
import DeletableValue from '../../mixin/DeletableValue';
import DisposableValue from '../../mixin/DisposableValue';

describe('Readonly value mixin', () => {
  class MyClass {
    value: string;

    constructor(value: string = 'my value') {
      this.value = value;
    }
  }

  it('Should allow combine DeletableValue and DisposableValue mixin', () => {
    const myClass = DeletableValue(DisposableValue(MyClass));
    const myObject = new myClass();

    expect(myObject.value).toEqual('deleted');

    myObject.dispose();
    expect(myObject.value).toEqual('');
  });

  it('Should allow combine with ReadonlyValue', () => {
    const myClass = DeletableValue(DisposableValue(ReadonlyValue(MyClass)));
    const myObject = new myClass('my value');

    expect(myObject.value).toEqual('deleted');

    // myObject.value = 'new value' // It's not valid because of: [ts] Cannot assign to 'value' because it is a constant or a read-only property.

    // But Typescript still allows you change 'value' property with mixin methods
    myObject.dispose();
    expect(myObject.value).toEqual('');
  });
});
