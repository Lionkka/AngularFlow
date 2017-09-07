'use strict';
/**
 * Implements to string method. Retrieve different type of object returns string
 * @param entity
 * @returns {string}
 */
function myToString<T>(entity:T):string {
    return entity.toString();
}

myToString<[number]>([1, 2, 3]);