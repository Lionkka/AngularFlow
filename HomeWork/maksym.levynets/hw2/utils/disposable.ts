export class Disposable{
	_value: string;
	isReadOnly: boolean;
	dispose(){
		if(!this.isReadOnly) {
			this._value = '';
		} else {
			console.log('Value is Read Only');
		}
	}
}