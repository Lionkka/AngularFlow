import { Disposable } from './utils/disposable';
import { Deletable } from './utils/deletable';
import { Readable } from './utils/readable';
import { SomeObject } from './utils/SomeObject';


applyMixins(SomeObject, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			derivedCtor.prototype[name] = baseCtor.prototype[name];
		});
	});
}

let someClass = new SomeObject();
someClass.deletable();
console.log(someClass.SomeValue);
someClass.dispose();
console.log(someClass.SomeValue);
someClass.deletable();
console.log(someClass.SomeValue);
someClass.readable();
someClass.dispose();
console.log(someClass.SomeValue);