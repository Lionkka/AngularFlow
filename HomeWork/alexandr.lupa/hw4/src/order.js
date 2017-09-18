export class Order {

  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  countTotal(tax) {
    const delay = 2000;

    return new Promise((resolve, reject) => {
      if (tax > 100 || tax < 0) {
        reject(new Error('Invalid tax range'));
      }

      setTimeout(() => {
        const total = this.items.reduce((r, i) => {
          return r += i;
        });

        resolve(total + (total / 100) * tax);
      }, delay);
    });
  }

  get itemsCount() {
    return this.items.length;
  }

}