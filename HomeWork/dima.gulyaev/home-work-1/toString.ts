// Implements to string method. ( Retrieve different type of object returns string );

function identityString<T>(arg: T): string {
    return String(arg);
}

console.log(typeof identityString<number>(100), '-',  identityString<number>(100));
console.log(typeof identityString<string>('homework'), '-', identityString<string>('homework'));
