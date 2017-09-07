
import { LinkedListNode } from './linkedListNode'

export class LinkedList {

    constructor() {
        this._size = 0;
        this.head = null;
        this.tail = null;
    };
    
    private head: LinkedListNode<any>;
    private tail: LinkedListNode<any>;
    private _size: number;

    public get size(): number {
        return this._size;
    };

    public get isEmpty(): boolean {
        return this.size === 0;
    };

    public addFirst<T>(element: T): void {   
        let tmpNode = new LinkedListNode<T>(element, this.head, null);
        if(this.head !== null ) {
            this.head.prev = tmpNode;
        }
        this.head = tmpNode;
        if(this.tail === null) { 
            this.tail = tmpNode;
        }
        this._size++;
        console.log("adding: "+element);
    };

    public addLast<T>(element: T): void {
       let tmpNode = new LinkedListNode<T>(element, null, this.tail);        
       if(this.tail !== null) {
           this.tail.next = tmpNode;
        }
       this.tail = tmpNode;
       if(this.head === null) { 
           this.head = tmpNode;
       }
       this._size++;
       console.log("adding: " + element);
    };

    public addAfter<T>(data: T, prevNodeIndex: number): LinkedListNode<T>{
        let prevNode = this.getNodeByIndex(prevNodeIndex);
        if(prevNode === this.tail) {
            this.addFirst<T>(data);
        } else {
            console.log("Adding node after "+ prevNode.data);
            let newNode = new LinkedListNode<T>(data);
            let nextNode = prevNode.next;
            newNode.next = nextNode;
            prevNode.next = newNode;
            nextNode.prev = newNode;
            newNode.prev = prevNode;
            this._size++;
            return newNode;
        }
    }

    public getElementByIndex(index: number): any {
        return this.getNodeByIndex(index).data;
    }

    public getNodeByIndex(index: number): LinkedListNode<any> {
        if(index > this.size || index < 0){
            console.log('Index is out of range. List size: ' + this.size);
            return;
        }
        let tmpNode = this.head;
        while((index - 1) >= 0){
            tmpNode = tmpNode.next;            
            index--;
        }
        return tmpNode;
    }

    public iterateForward(): void {
        console.log("iterating forward...");
        let tmpNode = this.head;
        while(tmpNode !== null) {
            console.log(tmpNode.data);
            tmpNode = tmpNode.next;
        }
    }

    public iterateBackward(): void {
        console.log("iterating backward...");
        let tmpNode = this.tail;
        while(tmpNode !== null) {
            console.log(tmpNode.data);
            tmpNode = tmpNode.prev;
        }
    }

    public removeFirst(): any {
        if (this.isEmpty) {
            console.log('List is empty');
            return;
        }
        let tmpNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
        console.log("deleted: " + tmpNode.data);
        return tmpNode.data;
    }

    public removeLast(): any {
        if (this.isEmpty) {
            console.log('List is empty');
            return;
        }
        let tmpNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this._size--;
        console.log("deleted: " + tmpNode.data);
        return tmpNode.data;
    }   
}
