import { Disposable } from './Disposable';
import { Deletable } from './Deletable';
import { Readable } from './Readable';
import  Mix from './Mixin';

@Mix(Disposable, Deletable, Readable)
export class Smartable implements Disposable, Deletable, Readable {
    public value: string = 'smartable string';
    public isReadonly: boolean = false;

    public set Value(val: string) {
        if (!this.isReadonly)
            this.value = val;
    }

    public get Value(): string {
        return this.value;
    }

    Dispose: () => void;
    Delete: () => void;
    ReadOnly: () => void;
}