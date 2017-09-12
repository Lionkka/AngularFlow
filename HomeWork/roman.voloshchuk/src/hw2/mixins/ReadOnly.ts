export default class ReadOnly {
    public protect():void {
        Object.getOwnPropertyNames(this).forEach(name => {
            let tmp:any = this[name];
            Object.defineProperty(this, name, {
                value: tmp,
                writable: false
            });
        });
    }
}