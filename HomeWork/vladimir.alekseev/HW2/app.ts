//## Homework 2 ##

/* Task 1
- Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
Class should contains property value: string. If Dispose it should be equals ''.
If delete is should be equals 'deleted'. Id readonly it can't be changed.
*/

import * as mixinClasses from "./classes"
import { applyMixins } from './applyMixins.util';

class mainClass implements mixinClasses.Disposable, mixinClasses.Deletable, mixinClasses.Readable {
    public _value: string;
    public isReadOnly: boolean;

    public dispose: () => void;
    public delete: () => void;
    public readonly: () => void;

    constructor(value: string = '', readOnly: boolean = false) {
        this._value = value;
        this.isReadOnly = readOnly;
        console.log('Created new Mixin mainClass')
    }

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        if (!this.isReadOnly) {
            this._value = value;
        }
    }
}

applyMixins(mainClass, [mixinClasses.Disposable, mixinClasses.Deletable, mixinClasses.Readable]);

const mixinClass = new mainClass('This is new instance of mixin class.');

console.log('1) get: ',mixinClass.value);

mixinClass.value = 'set another value text';
console.log('2) set: ',mixinClass.value);

mixinClass.readonly();
mixinClass.value = 'set text but value is readonly';
console.log('3) readonly: ',mixinClass.value);

mixinClass.delete();
console.log('4) delete: ',mixinClass.value);

mixinClass.dispose();
console.log('5) dispose: ',mixinClass.value);

/* Result in console for Task1
Created new Mixin mainClass
1) get:  This is new instance of mixin class.
2) set:  set another value text
3) readonly:  set another value text
4) delete:  deleted
5) dispose:
*/


