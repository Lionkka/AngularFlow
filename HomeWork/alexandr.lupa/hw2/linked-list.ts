// Implement generic for two way linked list for different items type.

class LinkedListItem<T> {
  private _value: T;
  private _next: LinkedListItem<T>;
  private _prev: LinkedListItem<T>;

  constructor(val: T) {
    this._value = val;
  }

  get value(): T {
    return this._value;
  }
  set value(value: T) {
    this._value = value;
  }

  get next(): LinkedListItem<T> {
    return this._next;
  }
  set next(value: LinkedListItem<T>) {
    this._next = value;
  }

  get prev(): LinkedListItem<T> {
    return this._prev;
  }
  set prev(value: LinkedListItem<T>) {
    this._prev = value;
  }

}

class LinkedList<T> {
  private head: LinkedListItem<T>;

  public append(value: T): void {
    const newItem: LinkedListItem<T> = new LinkedListItem(value);
    let currentItem = this.head;

    if (!currentItem) {
        this.head = newItem;
    } else {
      while (currentItem.next) {
        currentItem = currentItem.next;
      }
      currentItem.next = newItem;
      newItem.prev = currentItem;
    }
  }

  public prepend(value: T): void {
    const newItem: LinkedListItem<T> = new LinkedListItem(value);

    newItem.next = this.head;
    this.head.prev = newItem;
    this.head = newItem;
  }

  public insertAt(value, index: number): void {
    const newItem: LinkedListItem<T> = new LinkedListItem(value);

    if (!this.head) {
      this.head = newItem;
    } else {
      if (index === 0) {
        newItem.next = this.head;
        this.head.prev = newItem;
        this.head = newItem;
      } else {
        let currentItem = this.head;
        let i: number = 1;

        while (i < index && currentItem.next) {
          currentItem = currentItem.next;
          i++;
        }

        if (currentItem.next) {
          newItem.next = currentItem.next;
          currentItem.next.prev = newItem;
        }

        currentItem.next = newItem;
        newItem.prev = currentItem;
      }
    }
  }

  // public delete(index: number): void {
  //
  // }

  public toArray(): T[] {
    const arr = [];
    let currentItem = this.head;

    if (currentItem) {
      arr.push(currentItem.value);
      while (currentItem.next) {
        currentItem = currentItem.next;
        arr.push(currentItem.value);
      }
    }

    return arr;
  }
}


const listOfNumbers = new LinkedList<number>();
listOfNumbers.append(1);
listOfNumbers.append(2);
listOfNumbers.append(3);
listOfNumbers.append(4);
listOfNumbers.append(5);
listOfNumbers.append(6);
console.log(listOfNumbers.toArray()); // [ 1, 2, 3, 4, 5, 6 ]

listOfNumbers.prepend(0);
console.log(listOfNumbers.toArray()); // [ 0, 1, 2, 3, 4, 5, 6 ]

listOfNumbers.insertAt(12, 3);
console.log(listOfNumbers.toArray()); // [ 0, 1, 2, 12, 3, 4, 5, 6 ]

listOfNumbers.insertAt(14, 1000);
console.log(listOfNumbers.toArray()); // [ 0, 1, 2, 12, 3, 4, 5, 6, 14 ]