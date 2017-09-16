export class Node<T> {
    private value:T;
    private previous: Node<T> | null;
    private next: Node<T> | null;

    constructor(value:T){
        this.value = value;
        this.previous = null;
        this.next = null;
    }

    public set(value:T): void{
        this.value = value;
    }

    public get(): T{
        return this.value;
    }

    setNext(value:Node<T> | null): void {
        this.next = value;
    }

    getNext(): Node<T> | null {
        return this.next;
    }

    setPrevious(value:Node<T>): void {
        this.previous = value;
    }

    getPrevious():Node<T> | null {
        return this.previous;
    }
}