"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyMixin {
    constructor() {
        // Disposable
        this.isDisposed = false;
        this._value = 'init Mixin';
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (!this.isReadOnly) {
            this._value = value;
        }
    }
}
exports.MyMixin = MyMixin;
