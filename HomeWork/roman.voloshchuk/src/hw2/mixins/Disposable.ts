export default class Disposable {
    public dispose():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            if (typeof this[name] === 'string') {
                this[name] = '';
            }
        });
    }
}