/**
 * Implements valueOf method. Retrieve different type of objects returns true/false.
 */
namespace hw1 {
    export function valueOf(obj:object):boolean {
        return !!obj;
    }
}

console.log(hw1.valueOf([]));