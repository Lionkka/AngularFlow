export class Order {
    private items: number[] = [];
    public get ItemsCount(): number {
        return this.items.length;
    }
    public addItem(item: number): void {
        this.items.push(item);
    }

    public countTotal(tax: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (tax > 100 || tax < 0) {
                reject(new Error('Invalid tax range'));
            }

            setTimeout(() => {
                const total = this.items.reduce((r, i): number => {
                    return r += i;
                });

                resolve(total + (total / 100) * tax);
            }, 2000)
        });
    }

    public get count(): number {
        return this.items.length;
    }
}