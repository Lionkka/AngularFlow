// FIXED : Each class is in a separate file

//Implement generic for two way linked list for different items type.

// SZ each class and interface should be in separate file. Every thing else is ok;

import { DoublyList } from './List/DoublyList';

let doublyList: DoublyList<string> = new DoublyList<string>();
doublyList.add('first');
doublyList.add('second');
doublyList.add('three');
doublyList.add('four');

let searchedNode = doublyList.searchNodeAt(3);
console.log(searchedNode);
console.log(searchedNode.previous);

