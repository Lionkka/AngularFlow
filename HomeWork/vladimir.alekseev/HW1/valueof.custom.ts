// Task4

/*
- Implements valueOf method. Retrieve different type of objects returns true/false.
*/

export function customValueOf<T>(value: T): boolean {
    if (typeof value === 'undefined') {
        return false;
    }
    if (typeof value === 'function') {
        return true;
    }
    if (value === null) {
        return false;
    }
    return Boolean(value);
}