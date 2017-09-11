import { Leaf } from './Leaf';

// SZ methods names should start from lower case character. NOT for rework.

export class LinkedList<TEntity> {
    private _head: Leaf<TEntity> = null;
    private _length: number = 0;

    public get Length(): number {
        return this._length;
    }

    public Iterate(): void {
        let currentLeaf = this._head;

        console.log(currentLeaf.Data);

        while (currentLeaf.Next) {
            currentLeaf = currentLeaf.Next;
            console.log(currentLeaf.Data);
        }
    }

    public InsertAt(data: TEntity, index: number): void {

        if (index > -1 && index < this._length) {
            let currentLeaf: Leaf<TEntity> = this._head;
            let indx: number = 0;
            let previous: Leaf<TEntity>;
            let leaf: Leaf<TEntity> = new Leaf<TEntity>(data);

            if (index === 0) {
                leaf.Next = currentLeaf;
                this._head = leaf;
            }
            else {
                while (indx < index) {
                    previous = currentLeaf;
                    currentLeaf = currentLeaf.Next;

                    indx++;
                }
                leaf.Next = currentLeaf;
                previous.Next = leaf;
            }
            this._length++;
        }
    }

    public Add(leaf: TEntity): void {
        let data = new Leaf<TEntity>(leaf);
        let current: Leaf<TEntity>;

        if (this._head === null) {
            this._head = data;
        }
        else {
            current = this._head;

            while (current.Next) {
                current = current.Next;
            }

            current.Next = data;
        }

        this._length++;
    }
}






