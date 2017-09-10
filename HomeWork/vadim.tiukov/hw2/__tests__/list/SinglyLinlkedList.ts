import {} from "jest";

import Node from "../../list/Node";
import SinglyLinkedList from "../../list/SinglyLinkedList";

describe("Single-Linked List", () => {
  it("Constructor", () => {
    const list = new SinglyLinkedList();
  });

  it("Should add a data", () => {
    const data: string = "string";
    const list: SinglyLinkedList<string> = new SinglyLinkedList();

    list.add(data);
  });

  it("Should return the length", () => {
    const list = new SinglyLinkedList();

    expect(list.length).toEqual(0);
  });

  it("Should increase length when add", () => {
    const list: SinglyLinkedList<number> = new SinglyLinkedList();
    const data: number = 1;

    list.add(data);
    expect(list.length).toEqual(1);
  });

  it("Should return the first", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    expect(list.first).toEqual(1);
  });

  it("Should return the last", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.last).toEqual(3);
  });

  it("Should return the last and the first of an empty list", () => {
    const list = new SinglyLinkedList();

    expect(list.last).toBeUndefined();
    expect(list.first).toBeUndefined();
  });

  it("Should return all", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(Array.from(list.all())).toEqual([1, 2, 3]);
  });

  it("Should remove", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    list.remove(2);

    expect(Array.from(list.all())).toEqual([1, 3]);
  });

  it("Should remove first occurrence", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(2);

    list.remove(2);

    expect(Array.from(list.all())).toEqual([1, 3, 2]);
  });

  it("Should remove few times `same` value", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(2);

    list.remove(2);
    list.remove(2);

    expect(Array.from(list.all())).toEqual([1, 3]);
  });

  it("Should return false when can not remove element", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.remove(4)).toBeFalsy();
  });

  it("Should decrease the length when remove an element", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.length).toEqual(3);

    list.remove(1);
    expect(list.length).toEqual(2);
  });

  it("Should remove first element", () => {
    const list = new SinglyLinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.remove(1)).toBeTruthy();
    expect(Array.from(list.all())).toEqual([2, 3]);
  });
});
