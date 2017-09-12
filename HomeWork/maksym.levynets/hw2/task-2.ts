import { DoublyList } from './utils/DoublyList';
import { LinkedList } from './utils/linkedList';

let someNewList = new DoublyList<LinkedList>();

someNewList.add(43);
someNewList.add(567);
someNewList.add(3867);
someNewList.add('bla bla');
someNewList.add(new Date());
someNewList.add({
	person: {
		name: 'Vova',
		lastname: 'SomeLastname'
	}
});

console.log(someNewList.show());
console.log(someNewList.search(3));
someNewList.remove(3);
console.log(someNewList.show());