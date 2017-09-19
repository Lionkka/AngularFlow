/*
 ## Homework 3 (Group 2) ##
 - Create decorator for class. Decorator should add method componentDidMount that console log 'Component ${name} was mounted'.
 - Create decorator for method that before method invoke fill field hash of class (get name and class id and put to added field name)
 - Add decorator notify. Decorator before invoke the method should be invoke all methods from input array of callbacks.
 */

function MyDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		name: string;
		public componentDidMount () {
			console.log(`Component ${this.name} was mounted`);
		};
	}
}
@MyDecorator

class UserClass {
	public name: string = 'MyDecorator';
	componentDidMount () {};
}

let userClass = new UserClass();
userClass.componentDidMount();


// Create decorator for method that before method invoke fill field hash of class (get name and class id and put to added field name)
function MyDecorator2<T extends {new(...args:any[]):{}}>(constructor:T) {
	return class extends constructor {
		name: string;
		id: number;
		hash:string;
		public makeHash () {
			this.hash = this.name + this.id.toString();
			console.log(`${this.hash} `);
		};
	}
}

@MyDecorator2
class MyClass {
	public name: string = 'MyDecorator';
	public id : number = 13;
	makeHash (){};
}

let userClass2 = new MyClass();
userClass2.makeHash();