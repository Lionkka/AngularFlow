export class Readable {
    public isReadOnly:boolean;

    public readonly(flag:boolean):void {
        this.isReadOnly = flag;
    }
}