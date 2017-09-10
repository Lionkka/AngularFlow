// Implements to string method. Retrieve different type of object returns string
function customToString(data: string | number | boolean | object): string;
function customToString(data: any): string {
    if (typeof data === 'string') {
        return data
    } else if (Array.isArray(data)) {
        return data.join('')
    } else if (typeof data === 'boolean' || typeof data === 'object' || typeof data === 'number') {
        return data.toString()
    }
}

export default customToString
