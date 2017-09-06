import {} from 'jest';
import DeletableValue from '../../mixin/DeletableValue';

describe('Readonly mixin', () => {
  class MyClass {
    value: string = 'my value';
  } 

  class MyClassWithDisposableValue extends DeletableValue(MyClass) {}

  it('Should redefine declared value', () => {
    const myObject = new MyClassWithDisposableValue();

    expect(myObject.value).not.toEqual('my value');
    expect(myObject.value).toEqual('deleted');
  });

  it('Should add `delete` method that make value "deleted"', () => {
    const myObject = new MyClassWithDisposableValue();
    
    myObject.value = 'My new value';
    expect(myObject.value).toEqual('My new value');

    myObject.delete();
    expect(myObject.value).toEqual('deleted');
  });
});
