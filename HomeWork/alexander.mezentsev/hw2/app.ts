// ## Homework 2 ##

/*
Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. 
If Dispose it should be equals ''. If delete is should be equals 'deleted'. If readonly it can't be changed.
*/

import { MixedObject } from './classes/mixedObject'

const mySuperObj: MixedObject = new MixedObject();
console.log(mySuperObj.value);
//'active'
mySuperObj.value = 'test1';
console.log(mySuperObj.value);
//'test1'
mySuperObj.delete();
console.log(mySuperObj.value);
//'deleted'
mySuperObj.value = 'test2';
console.log(mySuperObj.value);
//'test2'
mySuperObj.dispose();
console.log(mySuperObj.value);
//''
mySuperObj.value = 'test3';
console.log(mySuperObj.value);
//'test3'
mySuperObj.readonly();
mySuperObj.value = 'test4';
console.log(mySuperObj.value);
//'test3'

/*
Implement generic for two way linked list for different items type.
*/

import { LinkedList } from './classes/linkedList'

const myDoubleLinkedList: LinkedList<string> = new LinkedList();
myDoubleLinkedList.addFirst('test1');
//adding: test1
myDoubleLinkedList.addLast('test2');
//adding: test2
myDoubleLinkedList.iterateForward();
//iterating forward...
//test1
//test2
myDoubleLinkedList.addLast('test3');
//adding: test3
myDoubleLinkedList.iterateBackward();
//iterating backward...
//test3
//test2
//test1
myDoubleLinkedList.addAfter('test2.1', 1);
//Adding node (test2.1) after test2
myDoubleLinkedList.addAfter('test1.1', 0);
//Adding node (test1.1) after test1
myDoubleLinkedList.iterateForward();
//iterating forward... 
//test1
//test1.1
//test2 
//test2.2
//test3
console.log("Element by index 2:", myDoubleLinkedList.getElementByIndex(2));
//Element by index 2: test2

/*
Create d.ts file for jQueryCookie library
*/

import {$} from './typings/jquery.cookie';

$.cookie('hw2.cookie1', 'myTestCokie', { secure: true });//set with params
$.cookie('hw2.cookie2', 'myTestCokie2'); //set without params
$.cookie('hw2.cookie') //get by key

/*
Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel, when the first finish run third and when all finish console log 'Done!') 
timeout request to paralel. And When it all done log to console 'DONE!'(Use p)
*/

const getDoneAsync = function(time: number): Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (string) => void) => {
        setTimeout(():void=>{
            return res('Done with delay: ' + time);
        }, time * 1000);
    });
}
const asyncRequestsArr: Promise<string>[] = [
    getDoneAsync(8), 
    getDoneAsync(3), 
    getDoneAsync(5)
];
Promise.all(asyncRequestsArr).then((results: string[]) => {
    console.log(results);
    //Array [ "Done with delay: 8", "Done with delay: 3", "Done with delay: 5" ]
    console.log('DONE!');
    //DONE!
}) 


