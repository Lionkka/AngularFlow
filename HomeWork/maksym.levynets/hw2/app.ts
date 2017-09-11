// ## Homework 2 ##
// #1 - Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. 
// Class should contains property value: string. 
// If Dispose it should be equals ''. If delete is should be equals 'deleted'. 
// Id readonly it can't be changed.

// SZ each class should be in separate file, also each task should be in separate file too.

class Disposable{
    _value: string;
    isReadOnly: boolean;
    dispose(){
    	if(!this.isReadOnly) {
    		this._value = '';
    	} else {
    		console.log('Value is Read Only');
    	}
    }
}

class Deletable{
    _value: string;
    isReadOnly: boolean;
    deletable(){
    	if(!this.isReadOnly) {
    		this._value = 'deleted';
    	} else {
    		console.log('Value is Read Only');
    	}
    }
}

class Readable{
    isReadOnly: boolean;
    readable(){
        this.isReadOnly = true;
    }
}

class SomeObject implements Disposable, Deletable, Readable{
    _value: string;
    
    public get SomeValue(): string{
        return this._value;
    }

    public set SomeValue(val: string){
        this._value = val;
    }
    
    constructor(){
        this._value = 'Initial'
    }

    dispose: () => void;
    deletable: () => void;
    isReadOnly : boolean = false;
    readable: () => void;
}

applyMixins(SomeObject, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

let someClass = new SomeObject();
someClass.deletable();
console.log(someClass.SomeValue);
someClass.dispose();
console.log(someClass.SomeValue);
someClass.deletable();
console.log(someClass.SomeValue);
someClass.readable();
someClass.dispose();
console.log(someClass.SomeValue);

// #2 - Implement generic for two way linked list for different items type.
type LinkedList = { 
	next: LinkedList,
	previous: LinkedList,
	data: LinkedList
};

// SZ ListNode should has generic type, which will be set in DoublyList
class ListNode {
	data: LinkedList;
	previous: LinkedList;
	next: LinkedList;
	
	constructor(value: LinkedList) {
		this.data = value;
		this.previous = null;
		this.next = null;
	}
}
// SZ DoublyList should has generic type like Array does
class DoublyList {
	_length: number;
	head: LinkedList;
	tail: LinkedList;
	
	constructor() {
		this._length = 0;
		this.head = null;
		this.tail = null;
	}
	
	add(val) {
		let node: LinkedList = new ListNode(val);
		
		if (this._length) {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this._length++;

		return node;
	}
	
	search(pos) {
		let currentNode: LinkedList = this.head;
		let length: number = this._length;
		let count: number = 1;
		let message: string = 'Failure: non-existent node in this list.';
		
		if (length === 0 || pos < 1 || pos > length) {
			throw new Error(message);
		}

		while (count < pos) {
			currentNode = currentNode.next;
			count++;
		}

		return currentNode;
	}
	
	remove(pos) {
		let currentNode: LinkedList = this.head;
		let length: number = this._length;
		let count: number = 1;
		let message: string = 'Failure: non-existent node in this list.';
		let beforeNodeToDelete: LinkedList = null;
		let afterNodeToDelete: LinkedList = null;
		let nodeToDelete: LinkedList = null;
		let deletedNode: LinkedList = null;

		if (length === 0 || pos < 1 || pos > length) {
			throw new Error(message);
		}

		if (pos === 1) {
			this.head = currentNode.next;

			if (!this.head) {
				this.head.previous = null;
			} else {
				this.tail = null;
			}
		} else if (pos === this._length) {
			this.tail = this.tail.previous;
			this.tail.next = null;
		} else {
			while (count < pos) {
				currentNode = currentNode.next;
				count++;
			}

			beforeNodeToDelete = currentNode.previous;
			nodeToDelete = currentNode;
			afterNodeToDelete = currentNode.next;

			beforeNodeToDelete.next = afterNodeToDelete;
			afterNodeToDelete.previous = beforeNodeToDelete;
			deletedNode = nodeToDelete;
			nodeToDelete = null;
		}

		this._length--;

		return console.log('success');
	}
	
	show() {
		let arr = [];
		let currentItem = this.head;

		while (true) {
			arr.push(currentItem.data);

			if (currentItem.next) {
				currentItem = currentItem.next;
			} else {
				break;
			}
		}

		return arr;
	}
}

let someNewList = new DoublyList();

someNewList.add(43);
someNewList.add(567);
someNewList.add(3867);
someNewList.add('bla bla');
someNewList.add(new Date());
someNewList.add({
	person: {
		name: 'Vova',
		lastname: 'SomeLastname'
	}
});

console.log(someNewList.show());
console.log(someNewList.search(3));
someNewList.remove(3);
console.log(someNewList.show());

// #3 - Create d.ts file for jQueryCookie library
// #4 - Create three asynchronous
// timeout request to paralel. And When it all done log to console 'DONE!'(Use p)