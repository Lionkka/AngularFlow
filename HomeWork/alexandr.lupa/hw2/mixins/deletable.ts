export class Deletable {
  public _value: string;

  public delete(): void {
    this._value = 'delete';
  }
}
