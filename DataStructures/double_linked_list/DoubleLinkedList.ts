import { DoubleNode } from "./DoubleNode.ts";
type NodeOrVal<T> = DoubleNode<T> | T;
export class DoubleLinkedList<T> {
  head: DoubleNode<T> | null = null;
  tail: DoubleNode<T> | null = null;
  length: number = 0;
  constructor(nodes: T[]) {
    if (nodes.length === 0) return;
    for (let i = 0; i < nodes.length; i++) {
      this.push(new DoubleNode(nodes[i]));
    }
  }

  public push(node: NodeOrVal<T>) {
    node = this.to_node(node);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    if (this.tail != null) {
      const prev_tail = this.tail;
      node.prev = prev_tail;
      node.prev.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  public pop(): DoubleNode<T> | null {
    if (this.head === null || this.tail === null) return null;
    if (this.length === 1) {
      this.length = 0;
      const old_head = this.head;
      this.head = null;
      this.tail = null;
      return old_head;
    }
    const old_tail = this.tail;
    this.tail = old_tail.prev;
    if (this.tail) {
      this.tail.next = null;
    }
    old_tail.prev = null;
    this.length--;
    return old_tail;
  }

  public shift() {
    if (this.head === null || this.tail === null) return null;
    if (this.length === 1) {
      return this.pop();
    }
    const shifted = this.head;
    this.head = shifted.next as DoubleNode<T>;
    this.head.prev = null;
    shifted.next = null;
    this.length--;
    return shifted;
  }

  public unshift(node: NodeOrVal<T>) {
    node = this.to_node(node);
    if (this.length === 0) {
      this.push(node);
      return this;
    }
    const old_head = this.head as DoubleNode<T>;

    old_head.prev = node;
    node.next = old_head;
    this.head = node;
    this.head.prev = null;
    this.length++;
    return this;
  }
  public get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    const search_from_end = index > this.length / 2;
    if (search_from_end) {
      let current_index = this.length - 1;
      let current = this.tail as DoubleNode<T>;
      while (current_index > index) {
        current_index--;
        current = current.prev as DoubleNode<T>;
      }
      return current;
    } else {
      let current_index = 0;
      let current = this.head as DoubleNode<T>;
      while (current_index < index) {
        current_index++;
        current = current.next as DoubleNode<T>;
      }
      return current;
    }
  }
  public set(index: number, node: NodeOrVal<T>) {
    node = this.to_node(node);
    const find_index = this.get(index);
    if (find_index) {
      find_index.val = node.val;
      return true;
    }
    return false;
  }

  public insert(index: number, node: NodeOrVal<T>) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(node);
    if (index === this.length) return !!this.push(node);
    node = this.to_node(node);
    const insert_to = this.get(index) as DoubleNode<T>;
    if (insert_to.prev) {
      //we do no cast here because insert_to can be head
      insert_to.prev.next = node;
      node.prev = insert_to.prev;
      insert_to.prev = node;
      node.next = insert_to;
      this.length++;
      return true;
    }
  }
  public remove(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index) as DoubleNode<T>;

    (removeNode.prev as DoubleNode<T>).next = removeNode.next;
    (removeNode.next as DoubleNode<T>).prev = removeNode.prev;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }
  public reverse() {
    let current = this.tail;
    while (current) {
      const next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = current.next;
    }
    const old_head = this.head;
    this.head = this.tail;
    this.tail = old_head;
    return this;
  }
  private to_node(node: NodeOrVal<T>) {
    if (node instanceof DoubleNode === false) {
      node = new DoubleNode(node);
    }
    return node;
  }
}
/*while (true) {
  console.log(`${node?.prev?.val} -> ${node?.val} -> ${node?.next?.val}`, node);

  if (node) {
    node = node.next;
  } else {
    node = null;
  }
  if (node === null) break;
}*/
