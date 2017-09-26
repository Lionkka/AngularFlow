"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deletable {
    delete() {
        this.isDeleted = true;
        this.value = 'deleted';
    }
}
exports.Deletable = Deletable;
