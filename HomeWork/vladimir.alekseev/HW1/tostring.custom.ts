// Task3

/*
- Implements to string method. Retrieve different type of object returns string
*/

export function customToString<T>(value: T): string {
    if (typeof value === 'undefined') {
        return 'undefined';
    }
    if (value === null) {
        return 'null';
    }
    return value.toString();
}
