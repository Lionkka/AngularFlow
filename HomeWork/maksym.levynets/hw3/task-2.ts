// - Create decorator for method that before method 
// invoke fill field hash of class 
// (get name and class id and put to added field name)

function MyDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		name: string;
		id: number;
		hash: string;
		
		public getHash() {
			this.hash = this.name+this.id;
			console.log(this.hash);
		}
	}
}

@MyDecorator
class SomeData {
	public hash: string;
	public name: string = 'Initial';
	public id: number;
	
	public getHash() {
		
	}
	
}

let myData = new SomeData();
myData.name = "Table";
myData.id = 348;
myData.getHash();
