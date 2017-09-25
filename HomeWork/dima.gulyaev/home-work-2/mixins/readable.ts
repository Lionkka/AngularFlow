export class Readable {
  public isReadOnly: boolean = false;

  public readonly(): void {
    this.isReadOnly = true;
  }
}