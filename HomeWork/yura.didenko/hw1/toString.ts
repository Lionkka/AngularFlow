// SZ use of 'use strict' is strictly forbidden in es6 and typescript
// FIXED
/**
 * Implements to string method. Retrieve different type of object returns string
 * @param entity
 * @returns {string}
 */
function myToString<T>(entity:T):string {
    return entity.toString();
}

myToString<[number]>([1, 2, 3]);