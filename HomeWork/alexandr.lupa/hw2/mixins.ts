// Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

import { applyMixins } from './utilites/apply-mixins';
import { Disposable, Deletable, Readable } from './mixins/index';

class Value implements Disposable, Deletable, Readable {
  private _value: string = '';

  // Disposable
  public isDisposed: boolean = false;
  public dispose: () => void;

  // Deletable
  public isDeleted: boolean = false;
  public delete: () => void;

  // Readable
  public isReadOnly: boolean = false;
  public readonly: () => void;

  public get value(): string {
    if (this.isDeleted) {
      return 'deleted';
    }

    if (this.isDisposed) {
      return '';
    }

    return this._value;
  }

  public set value(value: string) {
    if (!this.isReadOnly) {
      this._value = value;
    }
  }
}

applyMixins(Value, [Disposable, Deletable, Readable]);

const myValue: Value = new Value();

console.log(myValue.value);
myValue.value = 'string';
console.log('change', myValue.value);

myValue.dispose();
console.log('dispose', myValue.value);
myValue.value = 'string 2';
console.log('dispose after change', myValue.value);

myValue.delete();
console.log('delete', myValue.value);
myValue.value = 'string3';
console.log('delete after change', myValue.value);