// Implement generic for two way linked list for different items type.
import { LinkedListNode } from './interfaces/LinkedListNode'
import handleError from './utils/handleError'

// SZ you should use generic types, any is forbidden

class LinkedList {
    private _length: number = 0;
    private _key: number = 0;
    private _head: LinkedListNode = null;
    private _tail: LinkedListNode = null;
    private _current: LinkedListNode = null;

    add(index:any, value:any):void {

        if (index < 0 || index >= this._length) {
            handleError('Out of bounds')
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
            handleError('No data structure')
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
            handleError('No data structure')
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

export default LinkedList

// const list = new LinkedList()

// test LinkedList

// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// console.log(list.toString())
// console.log(JSON.stringify(list.toArray()))
//
// list.add(1, 1)
// list.add(2, 2)
// list.pop()
// list.shift()
// list.unshift(1)
// console.log(list.toString())
// console.log(JSON.stringify(list.toArray()))
