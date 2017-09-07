export class Deletable {
  public isDeleted: boolean;

  public delete(): void {
    this.isDeleted = true;
  }
}
