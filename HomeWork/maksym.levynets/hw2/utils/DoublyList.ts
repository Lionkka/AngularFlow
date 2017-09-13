import { LinkedList } from './linkedList';
import { ListNode } from './ListNode';

// SZ DoublyList should has generic type like Array does -- maybe fixed
export class DoublyList<T> {
	_length: number;
	head: LinkedList;
	tail: LinkedList;
	
	constructor() {
		this._length = 0;
		this.head = null;
		this.tail = null;
	}
	
	add(val) {
		let node: LinkedList = new ListNode<LinkedList>(val);
		
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