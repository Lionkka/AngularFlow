export default class LinkedList<T> {
    private tail:Nod<T>|null = null;
    private size:number = 0;

    add(element:T):void {
        let newNod = new Nod(element);
        if (this.tail === null) {
            this.tail = newNod;
        } else {
            let current:any = this.tail;
            while (current.getNext()) {
                current = current.getNext();
            }
            current.setNext(newNod);
            newNod.setPrevious(current);
        }
        this.size++;
    }

    addByIndex(element:T, index:number):void {
        if (index > this.size - 1 || index < 0) {
            return;
        }
        let newNod = new Nod(element);
        let current:any = this.tail;
        if (index === 0) {
            this.tail = newNod;
        }
        while (index) {
            current = current.getNext();
            index--;
        }
        if (current) {
            newNod.setNext(current);
            if (current.getPrevious()) {
                newNod.setPrevious(current.getPrevious());
                current.getPrevious().setNext(newNod);
            }
            current.setPrevious(newNod);
        }
        this.size++;
    }

    get(index:number):T|void {
        let node:Nod<T>|null = this.getNodByIndex(index);
        if (node === null) {
            throw new Error(`${index} is out of list range`);
        } else {
            return node.getElement();
        }
    }

    remove(index:number):void {
        let node:any = this.getNodByIndex(index);
        if (node === null) {
            throw new Error(`${index} is out of list range`);
        } else {
            if (node.getPrevious()) {
                node.getPrevious().setNext(node.getNext());
            } else {
                //first node
                if (node.getNext()) {
                    this.tail = node.getNext();
                    if (this.tail) {
                        this.tail.setPrevious(null);
                    }
                } else {
                    this.tail = null;
                }
            }
        }
        this.size--;
    }

    getSize():number {
        return this.size;
    }

    toString():string {
        let result:Array<string>  = [];
        let current:any  = this.tail;
        if (current) {
            result.push(current.toString());
            while (current.getNext()) {
                current = current.getNext();
                result.push(current.toString());
            }
        }
        return result.join(", ");
    }

    private getNodByIndex(index:number):Nod<T>|null {
        if (index <= this.size - 1 && index >= 0) {
            let current:any = this.tail;
            if (!current) {
                return null;
            }
            while (index) {
                current = current.getNext();
                index--;
            }
            return current;
        }
        return null;
    }
}

class Nod<T> {
    private element:T;
    private nextElement:Nod<T>|null = null;
    private previousElement:Nod<T>|null = null;

    constructor(elem:T){
        this.element = elem;
    }

    getElement():T {
        return this.element;
    }
    setNext(nextEl:Nod<T>|null):void {
        this.nextElement = nextEl;
    }
    getNext():Nod<T>|null {
        return this.nextElement;
    }
    setPrevious(prevEl:Nod<T>|null):void {
        this.previousElement = prevEl;
    }
    getPrevious():Nod<T>|null {
        return this.previousElement;
    }

    toString():string {
        return this.element.toString();
    }
}