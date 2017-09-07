// Implements valueOf method. ( Retrieve different type of objects returns true/false. );

function identityBoolean<T>(arg: T): boolean {
    return !!arg;
}

console.log( typeof identityBoolean<number>(5), '-', identityBoolean<number>(5) );
console.log( typeof identityBoolean<boolean>(false), '-', identityBoolean<boolean>(false) );