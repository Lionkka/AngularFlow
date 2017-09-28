export class Disposable {
    public isDisposed:boolean;
    public value:string;

    public dispose():void {
        this.isDisposed = true;
        this.value = '';
    }
}