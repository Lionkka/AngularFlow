// Implements valueOf method. Retrieve different type of objects returns true/false.
function customValueOf(data: string | number | boolean | object): boolean;
function customValueOf(data: any): boolean {
    if (typeof data === 'string') {
        return data.length ? true : false
    } else if (typeof data === 'number') {
        return true
    } else if (typeof data === 'boolean') {
        return data
    } else if (Array.isArray(data)) {
        return data.length ? true : false
    } else if (typeof data === 'object') {
        return true
    }
}

export default customValueOf
