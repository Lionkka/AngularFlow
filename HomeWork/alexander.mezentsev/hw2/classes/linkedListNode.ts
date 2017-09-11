export class LinkedListNode<T> {
    // SZ type any is forbidden, LinkedListNode should has type T
    // LinkedListNode<T>
    constructor(data: T, next?: LinkedListNode<any>, prev?: LinkedListNode<any>){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    
    data: T;
    next: LinkedListNode<any>;
    prev: LinkedListNode<any>;
}