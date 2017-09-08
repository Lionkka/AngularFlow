// Implement generic for two way linked list for different items type.
import { LinkedListNode } from './interfaces/LinkedListNode'
import applyMixins from './utils/applyMixins'
import handleError from './utils/handleError'

class LinkedList {
    private _length: number = 0;
    private _key: number = 0;
    private _head: LinkedListNode = null;
    private _tail: LinkedListNode = null;
    private _current: LinkedListNode = null;

    add(index:any, value:any):void {

        if (index < 0 || index >= this._length) {
            return handleError('Out of bounds')
        }

        let i = 0;
        let current = this._head
        while (i < index) {
            current = current.next
            i++;
        }

        current.value = value
    }

    pop(): any {
        const value = this._tail.value
        this._tail = this._tail.prev

        if (this._length === 0) {
            return handleError('No data structure')
        }

        if (this._tail) {
            delete this._tail.next
            this._tail.next = null
        }

        this._length--;

        if (this._length === 0) {
            delete this._head
            this._head = null
        }

        return value
    }

    shift(): any {
        const value = this._head.value
        this._head = this._head.next

        if (this._length === 0) {
            return handleError('No data structure')
        }

        if (this._head) {
            delete this._head.prev
            this._head.prev = null
        }

        this._length--;

        return value;
    }

    push(value:any):void {
        const node:LinkedListNode = {
            value: value,
            prev: this._tail,
            next: null
        };

        if (this._length === 0) {
            this._head = this._tail = node
        } else {
            this._tail.next = node
            this._tail = this._tail.next
        }

        this._length++;
    }

    unshift(value:any):void {
        const node:LinkedListNode = {
            value: value,
            prev: null,
            next: this._head
        };

        if (this._length === 0) {
            this._head = this._tail = node
        } else {
            this._head.prev = node
            this._head = this._head.prev
        }

        this._length++;
    }

    toArray():Array<any> {
        const list = []
        let current = this._head
        while (current) {
            list.push(current.value)
            current = current.next
        }
        return list
    }

    toString():string {
        return `{${this.toArray().join("->")}}`
    }
}

const list = new LinkedList()

// test LinkedList

list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.toString())
console.log(JSON.stringify(list.toArray()))

list.add(1, 1)
list.add(2, 2)
list.pop()
list.shift()
list.unshift(1)
console.log(list.toString())
console.log(JSON.stringify(list.toArray()))


// Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.

// Disposable Mixin
class Disposable {
    value: string = ''
    dispose(): void {
      this.value = ''
    }
}

// Deletable Mixin
class Deletable {
    value: string = ''
    delete(): void {
      this.value = 'deleted'
    }
}

// Readable Mixin
class Readable {
    readonly value: string
}

class MixinObject implements Disposable, Deletable, Readable {
    value: string
    constructor(){
        console.log('Created MixinObject')
    }
    dispose: () => void
    delete: () => void
}

applyMixins(MixinObject, [Disposable, Deletable, Readable]);

const mixinObject = new MixinObject()
mixinObject.delete()
console.log(mixinObject.value)
mixinObject.dispose()
console.log(mixinObject.value)


// Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel when the first finish run third and when all finish console log 'Done!') timeout request to paralel. And When it all done log to console 'DONE!'(Use p)
const customDelay = function(time: number):Promise<string> {
    return new Promise<string>((resolve: (string) => void, reject: (string) => void) => {
        setTimeout(():void => {
            return resolve('Promise resolved!')
        }, time * 1000)
    });
}

function customAsync (): void {
     const promiseFirst = customDelay(3)
     const promiseSecond = customDelay(4)
     const promiseThird = customDelay(5)

     Promise.all([promiseFirst, promiseSecond, promiseThird]).then((values): void => {
         console.log('DONE!')
     })
 }

 customAsync()
