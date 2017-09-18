export class MyNode<T> {
    protected data:T;
    private _previous:MyNode<T>;
    private _next:MyNode<T>;

    constructor(data:T) {
        this.data = data;
    }

    public get next():MyNode<T> {
        return this._next;
    }

    public set next(val:MyNode<T>) {
        this._next = val;
    }

    public get previous():MyNode<T> {
        return this._previous;
    }

    public set previous(val:MyNode<T>) {
        this._previous = val;
    }
}
