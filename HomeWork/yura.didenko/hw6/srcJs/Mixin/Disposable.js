"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Disposable {
    dispose() {
        this.isDisposed = true;
        this.value = '';
    }
}
exports.Disposable = Disposable;
