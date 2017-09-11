// Deletable mixin
export class Deletable{
	public isEquals : string;

	public myDeletable():void{
		this.isEquals = 'deleted';
	}
}