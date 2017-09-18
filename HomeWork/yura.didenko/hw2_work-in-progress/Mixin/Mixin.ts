
import { Disposable } from './Disposable';
import { Deletable } from './Deletable';
import { Readable } from './Readable';

export class MyMixin implements Disposable, Deletable, Readable {

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