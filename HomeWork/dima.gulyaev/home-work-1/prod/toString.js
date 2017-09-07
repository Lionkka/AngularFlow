"use strict";
function identityString(arg) {
    return String(arg);
}
console.log(typeof identityString(100), '-', identityString(100));
console.log(typeof identityString('homework'), '-', identityString('homework'));
