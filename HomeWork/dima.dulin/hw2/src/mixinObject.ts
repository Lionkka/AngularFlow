import applyMixins from './utils/applyMixins'
// Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

// Disposable Mixin
class Disposable {
    value: string = ''
    dispose(): void {
      this.value = ''
    }
}

// Deletable Mixin
class Deletable {
    value: string = ''
    delete(): void {
      this.value = 'deleted'
    }
}

// Readable Mixin
class Readable {
    readonly value: string
}

class MixinObject implements Disposable, Deletable, Readable {
    value: string
    constructor(){
        console.log('Created MixinObject')
    }
    dispose: () => void
    delete: () => void
}

applyMixins(MixinObject, [Disposable, Deletable, Readable])

export default MixinObject

// const mixinObject = new MixinObject()
// mixinObject.delete()
// console.log(mixinObject.value)
// mixinObject.dispose()
// console.log(mixinObject.value)
