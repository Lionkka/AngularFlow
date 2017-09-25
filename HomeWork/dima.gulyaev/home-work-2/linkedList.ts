class listGeneric<T> {
    private _value: T;
    private _next: listGeneric<T>;
    private _prev: listGeneric<T>;

    constructor(val: T) { this._value = val }

    get value(): T {
        return this._value;
    }
    set value(value: T) {
        this._value = value;
    }

    get next(): listGeneric<T> {
        return this._next;
    }
    set next(value: listGeneric<T>) {
        this._next = value;
    }

    get prev(): listGeneric<T> {
        return this._prev;
    }
    set prev(value: listGeneric<T>) {
        this._prev = value;
    }
}

class LinkedList<T> {
    private head: listGeneric<T>;

    public append(value: T): void {
        const newItem: listGeneric<T> = new listGeneric(value);
        let currentItem = this.head;

        if (!currentItem) {
            this.head = newItem;
        } else {
            while (currentItem.next) {
                currentItem = currentItem.next;
            }
            currentItem.next = newItem;
            newItem.prev = currentItem;
        }
    }

    public prepend(value: T): void {
        const newItem: listGeneric<T> = new listGeneric(value);

        newItem.next = this.head;
        this.head.prev = newItem;
        this.head = newItem;
    }

    public insertAt(value, index: number): void {
        const newItem: listGeneric<T> = new listGeneric(value);

        if (!this.head) {
            this.head = newItem;
        } else {
            if (index === 0) {
                newItem.next = this.head;
                this.head.prev = newItem;
                this.head = newItem;
            } else {
                let currentItem = this.head;
                let i: number = 1;

                while (i < index && currentItem.next) {
                    currentItem = currentItem.next;
                    i++;
                }

                if (currentItem.next) {
                    newItem.next = currentItem.next;
                    currentItem.next.prev = newItem;
                }

                currentItem.next = newItem;
                newItem.prev = currentItem;
            }
        }
    }

    public toArray(): T[] {
        const arr = [];
        let currentItem = this.head;

        if (currentItem) {
            arr.push(currentItem.value);
            while (currentItem.next) {
                currentItem = currentItem.next;
                arr.push(currentItem.value);
            }
        }

        return arr;
    }
}

const listOfNumbers = new LinkedList<number>();
