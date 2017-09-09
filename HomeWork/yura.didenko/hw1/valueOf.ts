/**
 * Tusk N4
 * Implements valueOf method. Retrieve different type of objects returns true/false.
 * @param entity
 * @returns {boolean}
 */
function mainValueOf<T>(entity : T) : boolean {

    return !!entity;
}

mainValueOf<number>(3);
