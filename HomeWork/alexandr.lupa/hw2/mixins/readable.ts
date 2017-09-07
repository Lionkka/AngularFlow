export class Readable {
  public isReadOnly: boolean;

  readonly(): void {
    this.isReadOnly = false;
  }
}
