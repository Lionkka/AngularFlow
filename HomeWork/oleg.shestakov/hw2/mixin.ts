class Disposable {
    dispose() {
        return '';
    }
}

class Deletable {
    delete() {
        return 'deleted';
    }
}

class Readable {
    isReadOnly() {
        const readOnly = 'readonly';
        return readOnly;
    }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
} 

class MixedClass implements Disposable, Deletable, Readable {

    dispose:() => string;
    delete: () => string;
    isReadOnly: () => string;

}

applyMixins(MixedClass, [Disposable, Deletable, Readable]);

