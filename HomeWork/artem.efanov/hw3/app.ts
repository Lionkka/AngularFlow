/*
 ## Homework 3 (Group 2) ##
 - Create decorator for class. Decorator should add method componentDidMount that console log 'Component ${name} was mounted'.
 - Create decorator for method that before method invoke fill field hash of class (get name and class id and put to added field name)
 - Add decorator notify. Decorator before invoke the method should be invoke all methods from input array of callbacks.
 */

// function userDecor(name: any){
// 	return function () {
// 		return new class{
// 			name = name;
//
// 		}
// 	}
//
// }
//
// @userDecor(UserClass)
//
// class UserClass {
// 	componentDidMount(){
// 		console.log('Component ${name} was mounted');
// 	}
// }
// let userClass = new UserClass;
// userClass.componentDidMount();



function ClassDecorator(){
	return function (name: any) {
		return new class{
			name = name;
			componentDidMount(){
				console.log('Component ${name} was mounted');
			}
		}
	}
}


@ClassDecorator(UserClass)
class UserClass{}