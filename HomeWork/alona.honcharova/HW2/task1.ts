"use strict";

//Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
// Class should contains property value: string.
// If Dispose it should be equals ''.
// If delete is should be equals 'deleted'. Id readonly it can't be changed.

// Disposable mixin
class Disposable {
    public value: string;
    isDisposed: boolean;

    dispose() {
        this.isDisposed = true;
        this.value = '';
        console.log("Disposable");
    }
}

// Deletable mixin
class Deletable {
    public value: string;
    isDeleted: boolean;

    deletable() {
        this.isDeleted = true;
        this.value = 'deleted';
        console.log("Deletable");
    }
}

// Readable mixin
class Readable {
    public value: string;
    isReadable: boolean;

    makeReadable() {
        this.isReadable = true;
        this.value = '';
        Object.defineProperty(this, "value", {
            writable: false,
        });
        console.log("Readable");
    }
}

class SmartObject implements Disposable, Deletable, Readable {
    public value: string;

    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;

    // Delete
    isDeleted: boolean = false;
    deletable: () => void;

    // Delete
    isReadable: boolean = false;
    makeReadable: () => void;
}

applyMixins(SmartObject, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

const smm = new SmartObject();
smm.value = 'test';
console.log(smm.value);
smm.dispose();
console.log(smm.value);
smm.deletable();
console.log(smm.value);
smm.makeReadable();
try{
    smm.value = 'test2';
}
catch (e){
    console.log("Object is read only, you can't change it!");
}
