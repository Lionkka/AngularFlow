import { LinkedListNode } from './linkedListNode'

// SZ LinkedList class should has a generic type, which it passes into LinkedListNode
// Fixed (SZ LinkedList class should has a generic type, which it passes into LinkedListNode)
export class LinkedList<T> {

    constructor() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    };
    
    private head: LinkedListNode<T>;
    private tail: LinkedListNode<T>;
    private _size: number;

    public get size(): number {
        return this._size;
    };

    public get isEmpty(): boolean {
        return this.size === 0;
    };

    // SZ method shouldn't has a type definition, only class should has it
    //Fixed (SZ method shouldn't has a type definition, only class should has it)
    public addFirst(element: T): void {   
        let tmpNode: LinkedListNode<T> = new LinkedListNode<T>(element, this.head, null);
        if(this.head !== null ) {
            this.head.prev = tmpNode;
        }
        this.head = tmpNode;
        if(this.tail === null) { 
            this.tail = tmpNode;
        }
        this._size++;
        // SZ please use es6 templates for concatenation of this kind
        // Fixed(SZ please use es6 templates for concatenation of this kind)
        console.log(`adding ${element}`);
    };

    public addLast(element: T): void {
       let tmpNode: LinkedListNode<T> = new LinkedListNode<T>(element, null, this.tail);        
       if(this.tail !== null) {
           this.tail.next = tmpNode;
        }
       this.tail = tmpNode;
       if(this.head === null) { 
           this.head = tmpNode;
       }
       this._size++;
       console.log(`adding ${element}`);      
    };

    public addAfter(data: T, prevNodeIndex: number): LinkedListNode<T>{
        let prevNode: LinkedListNode<T> = this.getNodeByIndex(prevNodeIndex);
        if(prevNode === this.tail) {
            this.addFirst(data);
        } else {
            console.log(`Adding node (${data}) after ${prevNode.data}`);            
            let newNode: LinkedListNode<T> = new LinkedListNode<T>(data);
            let nextNode: LinkedListNode<T> = prevNode.next;
            newNode.next = nextNode;
            prevNode.next = newNode;
            nextNode.prev = newNode;
            newNode.prev = prevNode;
            this._size++;
            return newNode;
        }
    }

    public getElementByIndex(index: number): T {
        return this.getNodeByIndex(index).data;
    }

    public getNodeByIndex(index: number): LinkedListNode<T> {
        if(index > this.size || index < 0){
            console.log(`Index is out of range. List size: ${this.size}`);            
            return;
        }
        let tmpNode: LinkedListNode<T> = this.head;
        while((index - 1) >= 0){
            tmpNode = tmpNode.next;            
            index--;
        }
        return tmpNode;
    }

    public iterateForward(): void {
        console.log('iterating forward...');
        let tmpNode: LinkedListNode<T> = this.head;
        while(tmpNode !== null) {
            console.log(tmpNode.data);
            tmpNode = tmpNode.next;
        }
    }

    public iterateBackward(): void {
        console.log('iterating backward...');
        let tmpNode: LinkedListNode<T> = this.tail;
        while(tmpNode !== null) {
            console.log(tmpNode.data);
            tmpNode = tmpNode.prev;
        }
    }

    public removeFirst(): T {
        if (this.isEmpty) {
            console.log('List is empty');
            return;
        }
        let tmpNode: LinkedListNode<T> = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
        console.log(`deleted: ${tmpNode.data}`);        
        return tmpNode.data;
    }

    public removeLast(): T {
        if (this.isEmpty) {
            console.log('List is empty');
            return;
        }
        let tmpNode: LinkedListNode<T> = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this._size--;
        console.log(`deleted: ${tmpNode.data}`);  
        return tmpNode.data;
    }   
}
