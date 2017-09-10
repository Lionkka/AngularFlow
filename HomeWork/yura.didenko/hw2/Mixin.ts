//Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string.
// If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

class Disposable {
    public isDisposed:boolean;
    public value:string;

    public dispose():void {
        this.isDisposed = true;
        this.value = '';
    }
}
class Deletable {
    public isDeleted:boolean;
    public value:string;

    public delete():void {
        this.isDeleted = true;
        this.value = 'deleted'
    }
}

class Readable {
    public isReadOnly:boolean;

    public readonly(flag:boolean):void {
        this.isReadOnly = flag;
    }
}

class Mixin implements Disposable, Deletable, Readable {

    private _value:string;

    // Disposable
    public isDisposed:boolean = false;
    public dispose:() => void;

    //Deletable
    public isDeleted:boolean;
    public delete:() => void;

    //Readable
    public isReadOnly:boolean;
    public readonly:(flag:boolean) => void;

    constructor() {
        this._value = 'init Mixin';
    }

    public get value():string {
        return this._value;
    }

    public set value(value:string) {

        if (!this.isReadOnly) {
            this._value = value;
        }
    }


}
/**
 * Init applyMixins;
 */
applyMixins(Mixin, [Disposable, Deletable, Readable]);
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

const mixinObj:Mixin = new Mixin();

console.log(mixinObj.value);
mixinObj.delete();
mixinObj.value = 'SetNew';
mixinObj.readonly(true);
mixinObj.value = 'SetNew2';
console.log(mixinObj.value);