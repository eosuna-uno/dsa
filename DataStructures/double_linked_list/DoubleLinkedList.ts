import { DoubleNode } from "./DoubleNode.ts";
class DoubleLinkedList<T> {
  head: DoubleNode<T> | null = null;
  tail: DoubleNode<T> | null = null;
  constructor(nodes: T[]) {
    if (nodes.length === 0) return;
    for (let i = 0; i < nodes.length; i++) {
      this.push(new DoubleNode(nodes[i]));
    }
  }

  public push(node: DoubleNode<T>) {
    if (this.head === null) {
      this.head = node;
      return;
    }
    if (this.tail === null) {
      this.tail = node;
      this.head.set_next(this.tail);
      this.tail.set_prev(this.head);
      return;
    }
    if (this.tail != null) {
      const prev_tail = this.tail;
      node.prev = prev_tail;
      node.prev.next = node;
      this.tail = node;
    }
  }
}
const list = new DoubleLinkedList([1, 2, 3, 4, 5, 6]);

let node = list.head;
while (true) {
  console.log(`${node?.prev?.val} -> ${node?.val} -> ${node?.next?.val}`, node);

  if (node) {
    node = node.next;
  } else {
    node = null;
  }
  if (node === null) break;
}
