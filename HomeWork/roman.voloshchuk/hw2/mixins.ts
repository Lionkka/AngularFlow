function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Disposable {
    public dispose():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            this[name] = '';
        });
    }
}
class Deletable {
    public delete():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            this[name] = 'deleted';
        });
    }
}
class ReadOnly {
    public protect():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            let tmp = this[name];
            Object.defineProperty(this, name, {
                value: tmp,
                writable: false
            });
        });
    }
}


class MixinTest implements Disposable, Deletable, ReadOnly {
    constructor(val:string) {
        this.value = val;
    }

    public value: string = '';
    set setValue(val:string){
        this.value = val;
    }

    dispose: () => void;
    delete: () => void;
    protect: () => void;
}

applyMixins(MixinTest, [Disposable, Deletable, ReadOnly]);


let test = new MixinTest("hello");
test.dispose();
test.delete();
console.log(test);
test.value = "again hello";
console.log(test);
test.protect();
console.log(test);
try {
    test.value = 'fasdfwe';
    console.log(test);
    test.setValue = "ftf";
    console.log(test);
} catch (e) {
    console.log(e);
}


