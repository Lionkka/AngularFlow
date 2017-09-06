// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
// Override this method for retrieve array of such parameters and retrieve array with dates.
function overrideFunction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var createDate = function (dateArgs) {
        if (typeof dateArgs[1] === 'string') {
            return new Date(dateArgs[1] + " " + dateArgs[0] + ", " + dateArgs[2]);
        }
        return new Date(dateArgs[2], dateArgs[1], dateArgs[0]);
    };
    if (Array.isArray(args[0])) {
        return args.map(function (dateArgs) { return createDate(dateArgs); });
    }
    return createDate(args);
}
overrideFunction(25, 7, 1994);
overrideFunction(25, 'August', 1994);
overrideFunction([[25, 7, 1994], [25, 'August', 1994]]);
// Implements to string method. Retrieve different type of object returns string
function customToString(obj) {
    return obj.toString();
}
// Implements valueOf method. Retrieve different type of objects returns true/false.
function customValueOf(obj) {
    return !!obj;
}
