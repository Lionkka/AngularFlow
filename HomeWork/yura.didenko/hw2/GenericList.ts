//Implement generic for two way linked list for different items type.

class MyNode<T> {
    protected data:T;
    private _previous:MyNode<T>;
    private _next:MyNode<T>;

    constructor(data:T) {
        this.data = data;
    }

    public get next():MyNode<T> {
        return this._next;
    }

    public set next(val:MyNode<T>) {
        this._next = val;
    }

    public get previous():MyNode<T> {
        return this._previous;
    }

    public set previous(val:MyNode<T>) {
        this._previous = val;
    }

}

class DoublyList<T> {

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

let doublyList:DoublyList<string> = new DoublyList<string>();
doublyList.add('first');
doublyList.add('second');
doublyList.add('three');
doublyList.add('four');

let searchedNode = doublyList.searchNodeAt(3);
console.log(searchedNode);
console.log(searchedNode.previous);

