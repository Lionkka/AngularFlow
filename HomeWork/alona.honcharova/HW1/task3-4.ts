/**
 * Implements to string method. Retrieve different type of object returns string
 */

function toString<T>( object: T ): string{
    return JSON.stringify(object);
}

/**
 * Implements valueOf method. Retrieve different type of objects returns true/false.
 */
function valueOf <T>(object:T): boolean{
    return !!object;
}

console.log(toString([1,2,3,4]));
console.log(toString({ilove:'typescript'}));

console.log(valueOf([1,2,3,4]));
console.log(valueOf(null));