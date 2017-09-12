export class Deletable{
	_value: string;
	isReadOnly: boolean;
	deletable(){
		if(!this.isReadOnly) {
			this._value = 'deleted';
		} else {
			console.log('Value is Read Only');
		}
	}
}