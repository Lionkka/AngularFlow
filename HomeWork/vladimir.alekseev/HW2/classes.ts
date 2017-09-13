export class Deletable {
    public _value;

    public delete(): void {
        this._value = 'deleted';
    };
}

export class Disposable {
    public _value;

    public dispose(): void {
        this._value = '';
    };
}

export class Readable {
    public isReadOnly: boolean;

    public readonly(): void {
        this.isReadOnly = true;
    }
}
