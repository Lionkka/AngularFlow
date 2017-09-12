/*
 Implement generic for two way linked list for different items type.
*/

class ListNode<T> {
    data: T;
    nextNode?: T;
    prevNode?: T;

    constructor(data: T, prevNode: T, nextNode: T) {
        this.data = data;
        this.prevNode = prevNode;
        this.nextNode = nextNode;
    }
}

class LinkedList<T> {
    list: ListNode<T>[];

    addToEnd(value: T):void {
        const prevNodeValue: T = this.list[this.list.length - 1].data;
        const newNode: ListNode<T> = new ListNode<T>(value, prevNodeValue, null);
        this.list.push(newNode);
    }

    addToBeginning(value: T): void {
        const nextNodeValue: T = this.list.length > 1 ? this.list[0].data: null;
        const newNode: ListNode<T> = new ListNode<T>(value, null, nextNodeValue);
        this.list.unshift(newNode);
    }

    insert(value: T, index: number) {
        if (index > 0) {
            const nextNodeValue = this.list[index + 1] ? this.list[index + 1].data: null;
            const prevNodeValue = this.list[index - 1] ? this.list[index - 1].data: null;
            const newNode: ListNode<T> = new ListNode(value, prevNodeValue, nextNodeValue);
            this.list.splice(index, 0, newNode)
        }
    }
}
