export class Order {

  private items: number[] = [];

  public addItem(item: number): void {
    this.items.push(item);
  }

  public countTotal(tax: number): Promise<number> {
    const delay: number = 2000;

    return new Promise((resolve, reject) => {
      if (tax > 100 || tax < 0) {
        reject(new Error('Invalid tax range'));
      }

      setTimeout(() => {
        const total: number = this.items.reduce((r: number, i: number) => {
          return r += i;
        });

        resolve(total + (total / 100) * tax);
      }, delay);
    });
  }

  public get itemsCount(): number {
    return this.items.length;
  }

}