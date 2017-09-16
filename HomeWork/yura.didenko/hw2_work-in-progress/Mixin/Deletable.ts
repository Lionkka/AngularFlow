export class Deletable {
    public isDeleted:boolean;
    public value:string;

    public delete():void {
        this.isDeleted = true;
        this.value = 'deleted'
    }
}