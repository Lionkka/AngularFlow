export class Leaf<TEntity>
{
    private _data: TEntity;
    private _next: Leaf<TEntity>;

    public set Next(val: Leaf<TEntity>) {
        this._next = val;
    }

    public get Next(): Leaf<TEntity> {
        return this._next;
    }

    public get Data(): TEntity {
        return this._data;
    }

    constructor(data: TEntity) {
        this._data = data;
        this._next = null;
    }
}