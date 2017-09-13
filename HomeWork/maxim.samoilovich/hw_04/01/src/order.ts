export class Order {
    private items: number[] = [];

    public get ItemsCount(): number {
        return this.items.length;
    }
    public addItem(item: number): void {
        this.items.push(item);
    }

    public countTotal(tax: number, cb: (val: number) => void): Promise<number> {
        const _this: object = this;
        if(tax > 100 || tax < 0) {
            throw new Error('Invalid tax range');
        }

        return new Promise<number> (function(resolve, reject) {
            setTimeout(function(__this) {
                __this = _this;
                const total: number = __this.items.reduce((r, i) => {
                    return r += i;
                });
                let res: number = total + (total/100)*tax;
                cb(res);
                resolve(res);
            }, 2000);
        });
    }
}