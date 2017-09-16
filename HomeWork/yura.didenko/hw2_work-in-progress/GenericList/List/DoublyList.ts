import {MyNode}  from './MyNode';
    
export class DoublyList<T> {
    private length:number;
    public head:MyNode<T>;
    public tail:MyNode<T>;

    constructor() {
        this.length = 0;
    }

    add(value:T):void {
        let node = new MyNode<T>(value);

        if (this.length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    searchNodeAt(position:number):MyNode<T> {

        let currentNode:MyNode<T> = this.head,
            length = this.length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};
        // if non-existent node in this list
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        // successful
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
}

