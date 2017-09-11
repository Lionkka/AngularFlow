import { IGeneric } from '../interfaces/igeneric';

export class Generic<T> {
    //private list: Array<IGeneric<T>>;
    private first: IGeneric<T>;
    private last: IGeneric<T>;
    private index: number;

    constructor() {
        this.first = undefined;
        this.last = undefined;
        this.index = 0;
    }

    public add(item: T): void {
        let newbie: IGeneric<T> = {
            id: this.index, 
            prev: undefined,
            next: undefined,
            value: item
        }
        if(this.first === undefined) {
            this.first = newbie;
            this.last = newbie;
        } else {
            newbie.prev = this.last;
            this.last.next = newbie;
            this.last = newbie;
        }
        this.index += 1;
    }

    public remove(idx: number): void {
        //let idx = this.getIndexOf(item);
        let current: IGeneric<T> = this.first;
        let prev: IGeneric<T>;
        let next: IGeneric<T>;
        while(current !== undefined) {
            if(current.id === idx) {
                if(current.prev !== undefined) {
                    current.prev.next = current.next;
                } else {
                    this.first = current.next;
                }
                if(current.next !== undefined) {
                    current.next.prev = current.prev;
                } else {
                    this.last = current.prev;
                }
                current = undefined;
            } else {
                current = current.next;
            }
        }
        /*if (idx != -1) {
            this.list.splice(idx, 1);
        }*/
    }

    public getFirst(): T {
        return this.first.value;
    }

    public getLast(): T {
        return this.last.value;
    }

    public getOne(idx: number): T {
        let current: IGeneric<T> = this.first;
        while(current !== undefined) {
            if(current.id === idx) {
                return current.value;
            } else {
                current = current.next;
            }
        }
        throw new RangeError();
    }

}