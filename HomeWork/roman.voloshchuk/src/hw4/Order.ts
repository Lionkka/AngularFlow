export class Order {
    private items: number[] = [];
    private static serviceDelay:number = 1;

    public get ItemsCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            this._delay(() => resolve(this.items.length), Order.serviceDelay);
        });
    }
    public addItem(item: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this._delay(
                () => {
                    this.items.push(item);
                    resolve();
                }, Order.serviceDelay);
        });
    }

    public countTotal(tax: number, clb:(result:number)=>void):void {
        this._delay(() => {
            if(tax > 100 || tax < 0){
                throw new Error('Invalid tax range');
            }

            const total = this.items.reduce((r, i) => {
                return r += i;
            });

            clb(total + (total/100)*tax);
        }, Order.serviceDelay);
    }

    private _delay(callback:()=>void, time:number):void {
        setTimeout(() => {
            callback();
        }, time * 1000);
    }
}
