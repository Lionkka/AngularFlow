export class Disposable {
    public _value: string;

    public dispose(): void {
        this._value = '';
    }
}