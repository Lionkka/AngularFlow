import LinkedList from './node-modules/LinkedList';


const list = new LinkedList();
//Add elements
console.log('--------Add elements--------');
list.add('1');
list.add('2');
console.log(list.toString());
list.addByIndex('0', 0); //add to begin
list.addByIndex('1.5', 2); // add to end
list.addByIndex('1.25', 2); // add to center
console.log(list.toString());
list.addByIndex('will not be added', 5); //out of bound array
console.log(list.toString());

console.log('--------Get elements--------');
console.log(list.get(0)); //Get first
console.log(list.get(4)); //Get last
console.log(list.get(2)); //Get center
try {
    console.log(list.get(5)); //Get out of bound
} catch (e) {
    console.log(e.message);
}

console.log('--------Remove elements--------');
list.remove(0); //Remove first
console.log(list.toString());
list.remove(3); //Remove last
console.log(list.toString());
list.remove(1); //Remove center
console.log(list.toString());
while (list.getSize()) {
    list.remove(0);
}
console.log("List should be empty:", list.toString());
