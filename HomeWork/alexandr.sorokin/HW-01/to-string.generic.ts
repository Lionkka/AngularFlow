/**
 * Implements to string method.
 * Retrieve different type of object returns string
 * */
function toCustomString<T>(parameter: T): string {
    return String(parameter);
}

console.log(toCustomString<number>(5));
console.log(toCustomString<boolean>(true));