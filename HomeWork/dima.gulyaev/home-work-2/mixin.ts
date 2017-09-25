import { Deletable } from "./mixins/deletable";
import { Disposable } from "./mixins/disposable";
import { Readable } from "./mixins/readable";
import { applyMixins } from "./mixins/applyMixins";


class Mixin implements Disposable, Deletable, Readable {
    public _value: string = '';
    public isReadOnly: boolean = false;

    dispose: () => void;
    remove: () => void;
    readonly: () => void;

    get value(): string {
        return this._value;
    }

    set value(val: string) {
        if(!this.isReadOnly) {
            this._value = val;
        }
    }
}

applyMixins(Mixin, [Disposable,Deletable, Readable]);