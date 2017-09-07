/**
 * Implements to string method. Retrieve different type of object returns string
 */
namespace hw1 {
    export function toString(obj:object):string {
        return obj.toString();
    }
}
console.log(hw1.toString([]), hw1.toString({}));