export default class Node<T> {
    public data: T;
    private _next: Node<any>;

    set next(next: Node<any>) {
      if (next === this) {
        throw new Error("Circular Reference");
      }

      this._next = next;
    }

    get next(): Node<any> {
      return this._next;
    }
}
