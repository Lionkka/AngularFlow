import Node from "./Node";

export default class SingleLinkedList {
  protected _length: number = 0;
  protected list: Node<any>;

  get length(): number {
    return this._length;
  }

  public add<U>(data: U): this {
    this._length += 1;

    const node: Node<U> = new Node();
    node.data = data;

    if (!this.list) {
      this.list = node;
    } else {
      this._last().next = node;
    }

    return this;
  }

  public remove<T>(data: T): boolean {
    let current: Node<any> = this.list;
    let previous: Node<any> | undefined;

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

  public first(): any {
    return this.list ? this.list.data : undefined;
  }

  public last(): any {
    return this.list ? this._last().data : undefined;
  }

  public all(): Iterable<Node<any>> {
    return (function*(list): any {
      let next: Node<any> = list;

      while (next) {
        yield next.data;
        next = next.next;
      }
    })(this.list);
  }

  protected _last(): Node<any> {
    let last: Node<any> = this.list;
    let next: Node<any> = this.list;

    while (next) {
      next = next.next;
      last = next ? next : last;
    }

    return last;
  }
}
