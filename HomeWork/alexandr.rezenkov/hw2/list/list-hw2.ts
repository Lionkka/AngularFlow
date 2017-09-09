import { LinkedList } from './GenericLinkedList';

const listNums: LinkedList<number> = new LinkedList<number>();
listNums.Add(1);
listNums.Add(2);
listNums.Add(3);
listNums.Add(4);
listNums.InsertAt(45666, 2);
listNums.Iterate();

const list: LinkedList<string> = new LinkedList<string>();
list.Add("1");
list.Add("2");
list.Add("3");
list.Add("4");
list.InsertAt("45ee", 2);
list.Iterate();