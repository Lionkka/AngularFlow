import { LinkedList } from './linkedList';

// SZ ListNode should has generic type, which will be set in DoublyList -- maybe fixed
export class ListNode<T> {
	data: LinkedList;
	previous: LinkedList;
	next: LinkedList;
	
	constructor(value: LinkedList) {
		this.data = value;
		this.previous = null;
		this.next = null;
	}
}