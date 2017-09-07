import {} from "jest";
import Node from "../../list/Node";

describe("One way linked list", () => {
  it("Could be constructed without arguments", () => {
    const node = new Node();

    expect(node.data).toBeUndefined();
    expect(node.next).toBeUndefined();
  });

  it("Should set a new value", () => {
    const myString: string = "Whooo";
    const node: Node<string> = new Node();

    expect(node.data).toBeUndefined();

    node.data = myString;
    expect(node.data).toEqual(myString);
  });

  it("Should set a next node with same type", () => {
    const node1: Node<string> = new Node();
    const node2: Node<string> = new Node();

    node1.next = node2;
    expect(node1).not.toEqual(node2);
    expect(node1.next).toEqual(node2);
  });

  it("Should set a next node with different type", () => {
    const node1: Node<string> = new Node();
    const node2: Node<number> = new Node();

    node1.next = node2;
    expect(node1).not.toEqual(node2);
    expect(node1.next).toEqual(node2);
  });

  it("Throw an error when adds itself as next", () => {
    const node: Node<string> = new Node();

    expect(() => node.next = node).toThrowError();
  });
});
