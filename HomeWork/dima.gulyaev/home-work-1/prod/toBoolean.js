"use strict";
function identityBoolean(arg) {
    return !!arg;
}
console.log(typeof identityBoolean(5), '-', identityBoolean(5));
console.log(typeof identityBoolean(false), '-', identityBoolean(false));
