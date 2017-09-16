/**
 * Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
 * Class should contains property value: string.
 * If Dispose it should be equals ''. If delete is should be
 * equals 'deleted'. Id readonly it can't be changed.
 */

import {Disposable} from "./mixins/disposable";
import {Deletable} from "./mixins/deletable";
import {Readable} from "./mixins/readable";
import {applyMixins} from "./mixins/applyMixin";

class MainMixin implements Disposable, Deletable, Readable {
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

applyMixins(MainMixin, [Disposable,Deletable, Readable]);