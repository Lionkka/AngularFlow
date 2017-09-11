// Readable mixin
export class Readable{
	public isEquals : string;
	public readOnly : boolean;

	public myReadable():void{
		this.readOnly = true;
	}
}