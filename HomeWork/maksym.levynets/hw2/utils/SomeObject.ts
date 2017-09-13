import { Disposable } from './disposable';
import { Deletable } from './deletable';
import { Readable } from './readable';

export class SomeObject implements Disposable, Deletable, Readable{
	_value: string;

	public get SomeValue(): string{
		return this._value;
	}

	public set SomeValue(val: string){
		this._value = val;
	}

	constructor(){
		this._value = 'Initial'
	}

	dispose: () => void;
	deletable: () => void;
	isReadOnly : boolean = false;
	readable: () => void;
}