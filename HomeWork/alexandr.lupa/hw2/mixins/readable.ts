export class Readable {
  public _value: string;
  public isReadOnly: boolean;

  public readonly(): void {
    this.isReadOnly = true;
  }
}
