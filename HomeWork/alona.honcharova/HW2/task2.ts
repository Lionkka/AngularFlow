// Implement generic for two way linked list for different items type.

class Item<T> {
    public data: T;
    public previous: Item<T> = null;
    public next: Item<T> = null;

    constructor(value: T) {
        this.data = value;
    }
}

interface LinkedList<T> {
    get(position: number): T;

    add(item: T): void;

    getAllItems(): Array<Item<T>>;

    remove(position: number): void;
}


class LinkedList<T> implements LinkedList<T> {
    private _length: number = 0;
    private head: Item<T>;
    private tail: Item<T>;

    private _checkPosition(position: number): void {
        if (position < 1 || position > this._length) {
            throw new Error('No such item');
        }
    }

    add(value: T): void {
        const item = new Item(value);

        if (this._length) {
            this.tail.next = item;
            item.previous = this.tail;
            this.tail = item;
        } else {
            this.head = item;
            this.tail = item;
        }

        this._length++;
    }

    get(position: number): T {
        let currentItem: Item<T> = this.head;
        let count: number = 0;

        // invalid position
        this._checkPosition(position);

        // sort out items to find item
        while (count < position) {
            currentItem = currentItem.next;
            count++;
        }

        return currentItem.data;
    }


    remove(position: number): void {
        let currentItem: Item<T> = this.head;
        let count: number = 0;
        let beforeItemToDelete: Item<T> = null;
        let itemToDelete: Item<T> = null;
        let deletedItem: Item<T> = null;
        let afterItemToDelete: Item<T> = null;

        this._checkPosition(position);

        // the first item is removed
        if (position === 1) {
            this.head = currentItem.next;

            // there is a second item
            if (!this.head) {
                this.head.previous = null;
                // there is no second item
            } else {
                this.tail = null;
            }

            // the last item is removed
        } else if (position === this._length) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            // a middle item is removed
        } else {
            while (count < position) {
                currentItem = currentItem.next;
                count++;
            }

            beforeItemToDelete = currentItem.previous;
            itemToDelete = currentItem;
            afterItemToDelete = currentItem.next;

            beforeItemToDelete.next = afterItemToDelete;
            afterItemToDelete.previous = beforeItemToDelete;

            deletedItem = itemToDelete;
            itemToDelete = null;
        }

        this._length--;
    }

    toString(): String {
        const allItems: Array<T> = [];
        let count: number = 0;
        let currentItem: Item<T> = this.head;

        while (count <= this._length) {
            allItems.push(currentItem.data);
            currentItem = currentItem.next;
            count++;
        }

        return allItems.toString();
    }
}


let list = new LinkedList();
list.add(4);
list.add(3);
list.add(14);
list.add(144);

console.log(list.toString());

console.log(list.get(2));
list.remove(2);
console.log(list.toString());


