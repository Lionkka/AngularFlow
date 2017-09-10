class MixedObject implements Mixins.Deletable, Mixins.Disposable, Mixins.Readable {
    private _value: string = 'active';

    public get value(): string{
        return this._value;
    }

    public set value(val: string){
        if(!this.isReadOnly){
            this._value = val;
        }        
    }

    isDeleted: boolean = false;
    isDisposed: boolean = false;
    isReadOnly: boolean = false;

    delete: () => void;
    dispose: () => void;
    readonly: () => void;
}

Mixins.Utils.applyMixins(MixedObject, [Mixins.Deletable, Mixins.Disposable, Mixins.Readable])

export {
    MixedObject
}