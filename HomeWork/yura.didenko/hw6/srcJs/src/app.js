"use strict";
// FIXED : Each class is in a separate file
Object.defineProperty(exports, "__esModule", { value: true });
//Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string.
// If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.
// SZ each class and interface should be in separate file. Every thing else is ok
const Mixin_1 = require("../Mixin/Mixin");
const Disposable_1 = require("../Mixin/Disposable");
const Deletable_1 = require("../Mixin/Deletable");
const Readable_1 = require("../Mixin/Readable");
/**
 * Init applyMixins;
 */
applyMixins(Mixin_1.MyMixin, [Disposable_1.Disposable, Deletable_1.Deletable, Readable_1.Readable]);
/**
 *
 * @param derivedCtor
 * @param baseCtors
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
const mixinObj = new Mixin_1.MyMixin();
console.log(mixinObj.value);
mixinObj.delete();
mixinObj.value = 'SetNew';
mixinObj.readonly(true);
mixinObj.value = 'SetNew2';
console.log(mixinObj.value);
