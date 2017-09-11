export class Deletable {
    public _value: string;

    remove(): void {
        this._value = 'deleted';
    }
}