/*
## Homework 4 ##
- Modify order calculation. Calculate order only after delay in 2 seconds. Cover logic by the unit tests.
- Create orderUsage.js file. Require order.js file. Create bundle.js file with entry point orderUsage.js with webpack.(For Vadim/Anton use System.js)
*/
export class Order {
    
    constructor() {
        this.items = [];
    }

    private items: number[];
    
    private calculateTax(tax: number): number {
        const total = this.items.reduce((r,i) => {
            return r += i;
        });
        return total + (total / 100) * tax;
    }

    private isInvalidTaxRange(tax: number): boolean {
        return tax > 100 || tax < 0
    }

    public get ItemsCount(): number {
        return this.items.length;
    }
    
    public addItem(item: number): void {
        this.items.push(item);
    }

    public countTotal(tax: number): number {
        if(this.isInvalidTaxRange(tax)){
            throw new Error('Invalid tax range');
        }
        return this.calculateTax(tax);
    }

    public countTotalAsync(tax: number): Promise<number> {
        return new Promise<number>((res: (number) => void, rej: (string) => void) => {
            setTimeout(() => {
                if(this.isInvalidTaxRange(tax)){                 
                   rej('Invalid tax range');
                }                
                res(this.calculateTax(tax));
            }, 2000);
        });
    }
}