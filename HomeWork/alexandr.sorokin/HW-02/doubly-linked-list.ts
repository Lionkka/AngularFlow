import {Node} from "./node";

export class DoublyLinkedList<T> {
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    private _length: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    add(value: T) {
        const node: Node<T> = new Node(value);

        if(this._length) {
            this.tail.setNext(node);
            node.setPrevious(this.tail);
        } else {
            this.head = node;
        }

        this.tail = node;
        this._length++;
        return node;
    }



    getNodeByIndex(index: number): Node<T> {
        let currentNode = this.head,
            length = this._length,
            count = 1;

        if (length === 0 || index > length) {
           throw new Error('Non-existent node in this list.');
        }

        while (count < index) {
            currentNode = currentNode.getNext();
            count++;
        }

        return currentNode;
    }

    remove(index: number): boolean {
        let currentNode = this.head,
            length = this._length,
            beforeNodeToDelete = null,
            afterNodeToDelete = null;

        if (length === 0 || index < 0 || index > length) {
            throw new Error('non-existent node in this list.');
        }

         if (index === 0) {
            this.head = currentNode.getNext();
            this.head.setPrevious(null);
        } else if (index === this._length) {
            this.tail = this.tail.getPrevious();
            this.tail.setNext(null);
        } else {
            currentNode = this.getNodeByIndex(index);
            beforeNodeToDelete = currentNode.getPrevious();
            afterNodeToDelete = currentNode.getNext();

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.previous = beforeNodeToDelete;
        }

        this._length--;
        return true;
    };

    public toArray(): T[] {
        const arr = [];
        let currentItem = this.head;

        if (currentItem) {
            arr.push(currentItem.get());
            while (currentItem.getNext()) {
                currentItem = currentItem.getNext();
                arr.push(currentItem.get());
            }
        }

        return arr;
    }
}
