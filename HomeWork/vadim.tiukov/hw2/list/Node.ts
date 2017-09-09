export default class Node<T> {
    public data: T;
    private _next: Node<T>;

    set next(next: Node<T>) {
      if (next === this) {
        throw new Error("Circular Reference");
      }

      this._next = next;
    }

    get next(): Node<T> {
      return this._next;
    }
}
