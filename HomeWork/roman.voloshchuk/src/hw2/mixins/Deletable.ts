export default class Deletable {
    public delete():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            if (typeof this[name] === 'string') {
                this[name] = 'deleted';
            }
        });
    }
}