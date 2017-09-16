// - Create decorator for method that before method 
// invoke fill field hash of class 
// (get name and class id and put to added field name)

function decorateMethod(name: string, id: number) {
	let someName:string = name;
	return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log(someName);
	}
}


class SomeData {
	public hash: string;
	public name: string;
	public id: number;
	
	@decorateMethod(this.name,this.id)
	someMethod() {
		console.log(this.name, this.id, this.hash);
	}
	
}

let myData = new SomeData();
myData.name = 'Table';
myData.id = 348;
myData.someMethod();
