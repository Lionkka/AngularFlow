// SZ please move these pipes into app folder, pipes are parts of app
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderby',
    pure: false
})
export class OrderByPipe implements PipeTransform {
    public transform(value: Array<string> | Array<number>, order?: string): Array<string> | Array<number> {
        if (order === undefined) {
            order = 'asc';
        }
        return this.sort(value, order);
    }

    public sort(arr: Array<string> | Array<number>, order: string): Array<string> | Array<number> {
        let arr_out: Array<string> | Array<number> = [];
        let indexes_arr: object = new Object();
        const length: number = arr.length;
        for (let i: number = 0; i < length; i++) {
            let ind: number;
            if (order === 'asc') {
                ind = this.getMin(arr, indexes_arr);
            } else {
                ind = this.getMax(arr, indexes_arr);
            }
            arr_out[arr_out.length] = arr[ind];
            indexes_arr[ind] = 0;
        }
        return arr_out;
    }

    public getMin(arr: Array<string> | Array<number>, indexes: object): number {
        let index: number;
        let tmp: string | number;
        const length: number = arr.length;
        for (let i: number = 0; i < length; i++) { // find first 'previously unused' element
            if (!(i in indexes)) {
                tmp = arr[i];
                index = i;
                break;
            }
        }
        for (let i: number = 0; i < length; i++) {
            if (!(i in indexes)) {
                if (tmp > arr[i]) {
                    tmp = arr[i];
                    index = i;
                }
            }
        }
        return index;
    }

    public getMax(arr: Array<string> | Array<number>, indexes: object): number {
        let index: number;
        let tmp: string | number;
        const length: number = arr.length;
        for (let i: number = 0; i < length; i++) { // find first 'previously unused' element
            if (!(i in indexes)) {
                tmp = arr[i];
                index = i;
                break;
            }
        }
        for (let i: number = 0; i < length; i++) {
            if (!(i in indexes)) {
                if (tmp < arr[i]) {
                    tmp = arr[i];
                    index = i;
                }
            }
        }
        return index;
    }
}
