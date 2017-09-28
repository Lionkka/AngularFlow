// FIXED : Each class is in a separate file

//Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string.
// If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

// SZ each class and interface should be in separate file. Every thing else is ok

import { MyMixin } from './Mixin'
import { Disposable } from './Disposable';
import { Deletable } from './Deletable';
import { Readable } from './Readable';
/**
 * Init applyMixins;
 */
applyMixins(MyMixin, [Disposable, Deletable, Readable]);
/**
 *
 * @param derivedCtor
 * @param baseCtors
 */
function applyMixins(derivedCtor:any, baseCtors:any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

const mixinObj:MyMixin = new MyMixin();

console.log(mixinObj.value);
mixinObj.delete();
mixinObj.value = 'SetNew';
mixinObj.readonly(true);
mixinObj.value = 'SetNew2';
console.log(mixinObj.value);

