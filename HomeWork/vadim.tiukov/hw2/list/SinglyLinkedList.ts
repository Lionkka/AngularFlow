import Node from "./Node";

export default class SinglyLinkedList<T> {
  protected _length: number = 0;
  protected list: Node<T>;

  get length(): number {
    return this._length;
  }

  public add(data: T): this {
    this._length += 1;

    const node: Node<T> = new Node();
    node.data = data;

    if (!this.list) {
      this.list = node;
    } else {
      this._last().next = node;
    }

    return this;
  }

  public remove(data: T): boolean {
    let current: Node<T> = this.list;
    let previous: Node<T> | undefined;

    while (current) {
      if (current.data === data) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.list = current.next;
        }

        this._length -= 1;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }

  public get first(): T | undefined {
    return this.list ? this.list.data : undefined;
  }

  public get last(): T | undefined {
    return this.list ? this._last().data : undefined;
  }

  public *all(): Iterable<T> {
    let next: Node<T> = this.list;

    while (next) {
      yield next.data;
      next = next.next;
    }
  }

  protected _last(): Node<T> {
    let last: Node<T> = this.list;
    let next: Node<T> = this.list;

    while (next) {
      next = next.next;
      last = next ? next : last;
    }

    return last;
  }
}
