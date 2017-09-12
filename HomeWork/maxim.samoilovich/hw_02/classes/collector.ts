import { Disposable } from './disposable';
import { Deletable } from './deletable';
import { Readable } from './readable';

export class Collector implements Disposable, Deletable, Readable {
    public val: string;
    public isReadOnly: boolean;

    public dispose: () => void;
    public delete: () => void;
    public readonly: () => void;

    constructor(val: string, readOnly: boolean) {
        this.val = val;
        this.isReadOnly = readOnly;
    }

    public get value(): string {
        return this.val;
    }

    public set value(val: string) {
        if(!this.isReadOnly) {
            this.val = val;
        }
    }
}