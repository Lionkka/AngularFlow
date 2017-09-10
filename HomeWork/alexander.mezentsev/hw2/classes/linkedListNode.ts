export class LinkedListNode<T> {

    constructor(data: T, next?: LinkedListNode<any>, prev?: LinkedListNode<any>){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    
    data: T;
    next: LinkedListNode<any>;
    prev: LinkedListNode<any>;
}