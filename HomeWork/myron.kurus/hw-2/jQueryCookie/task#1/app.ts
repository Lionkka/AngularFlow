import { Disposable } from './disposable';
import { Deletable } from './deletable';
import { Readable } from './readable';

// SZ mixin apply is missed
class MixinApp implements Disposable, Deletable, Readable {
    public value: string;
    public valueReadOnly: boolean;

    public dispose: () => void;
    public delete: () => void;
    public readonly: () => void;

    constructor(val: string, readOnly: boolean) {
        this.value = val;
        this.valueReadOnly = readOnly;
    }

    public get Value(): string {
        return this.value;
    }

    public set Value(val: string) {
        if(!this.valueReadOnly) {
            this.value = val;
        }
    }
}