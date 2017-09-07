/**
 * Implements valueOf method.
 * Retrieve different type of objects returns true/false.
 * */
function valueOf<T>(parameter: T): boolean {
    return !!parameter;
}

console.log(valueOf<number>(5));
console.log(valueOf<boolean>(true));