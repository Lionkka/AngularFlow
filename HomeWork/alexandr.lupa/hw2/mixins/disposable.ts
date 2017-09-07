export class Disposable {
  public isDisposed: boolean;

  public dispose(): void {
    this.isDisposed = true;
  }
}
