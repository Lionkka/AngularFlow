export interface IGeneric<T> {
    id: number;
    prev: IGeneric<T>;
    next: IGeneric<T>;
    value: T;
}