export default class Nod<T> {
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