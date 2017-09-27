
//Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string.
// If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

/**
 * - Transpile these files to js and then create bundle with webpack that you have from previous tasks and
 * create webpack config for bundling them to one file.
 */

import { MyMixin } from '../Mixin/Mixin'
import { Disposable } from '../Mixin/Disposable';
import { Deletable } from '../Mixin/Deletable';
import { Readable } from '../Mixin/Readable';
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

