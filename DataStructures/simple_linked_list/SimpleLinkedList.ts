import { SimpleNode } from "./SimpleNode.ts";
export class SimpleLinkedList<T> {
  head: SimpleNode<T> | null = null;
  tail: SimpleNode<T> | null = null;
  length: number = 0;
  constructor(nodes: T[]) {
    if (nodes.length === 0) return;
    for (let i = 0; i < nodes.length; i++) {
      this.push(new SimpleNode(nodes[i]));
    }
  }

  public push(node: SimpleNode<T> | T) {
    node = this.to_node(node);

    this.length++;
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail === null) {
      this.tail = node;
      this.length = 1;
      this.head.set_next(this.tail);
      return this;
    }
    if (this.tail != null) {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }
  public shift() {
    if (this.head === null) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return null;
    }
    const old = this.head;
    this.head = this.head.next;
    this.length--;
    return old;
  }
  public unshift(node: SimpleNode<T> | T) {
    node = this.to_node(node);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const old_head = this.head;
      this.head = node;
      this.head.next = old_head;
    }
    this.length++;
  }
  public pop() {
    if (this.head === null || this.tail === null) {
      return null;
    }
    if (this.length == 1) {
      const poped = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return poped;
    }

    let current = this.head;
    let ret_node = current;
    while (current.next) {
      ret_node = current;
      current = current.next;
    }
    this.tail = ret_node;
    this.tail.next = null;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return current;
  }

  public find(val: T): number {
    if (this.head === null || this.head === undefined) return -1;
    let index = 0;
    let current: SimpleNode<T> | null = this.head;
    while (current) {
      if (current.val == val) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  public get(index: number) {
    if (this.head === null || this.head === undefined) return null;
    if (index > this.length - 1) return null;
    let counter = 0;
    let current: SimpleNode<T> | null = this.head;
    while (counter !== index) {
      counter++;
      if (current && current.next) current = current.next;
    }
    return current;
  }

  public set(index: number, node: SimpleNode<T> | T) {
    node = this.to_node(node);
    const update_node = this.get(index);
    if (update_node) {
      update_node.val = node.val;
      return true;
    }
    return false;
  }
  public insert(index: number, node: SimpleNode<T> | T) {
    node = this.to_node(node);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(node);
      return true;
    }
    if (index === 0) {
      this.unshift(node);
      return true;
    }
    const prev_node = this.get(index - 1);
    if (prev_node) {
      const next = prev_node.next;
      node.next = next;
      prev_node.next = node;
      this.length++;
      return true;
    }
    this.length--;
    return false;
  }
  public remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    if (prev != null) {
      const removed = prev.next;
      if (prev && prev.next && prev.next.next) {
        prev.next = prev.next.next;
      } else {
        this.tail = prev;
      }
      this.length--;
      return removed;
    }
    return undefined;
  }

  public reverse() {
    const old_head = this.head;
    const old_tail = this.tail;

    let prev = old_head;

    if (!prev) return undefined;
    let current = prev.next;
    while (current && prev) {
      let nn = current.next;
      current.next = prev;
      prev = current;
      current = nn;
    }
    this.head = old_tail;
    this.tail = old_head;
    if (this.tail) {
      this.tail.next = null;
    }
  }
  private to_node(node: SimpleNode<T> | T) {
    if (node instanceof SimpleNode === false) {
      node = new SimpleNode(node);
    }
    return node;
  }
  public rotate(rotate_val: number) {
    /* this is a calculation i devised to get the negatives to positives
    // but modulo can work work with negative values if you add the length afterwards
    if (rotate_val < 0) {
      const le =
        (Math.floor(Math.abs(rotate_val) / this.length) + 1) * this.length;
      rotate_val = rotate_val + le;
    }*/
    const rotate_value = rotate_val % this.length;
    if (rotate_value < 0) rotate_value + this.length;
    if (rotate_value === 0) return this;
    const old_head = this.head;
    const old_tail = this.tail;
    if (this.tail) this.tail.next = old_head;
    let current: SimpleNode<T> | null | undefined = this.head;
    let previous = null;
    for (let i = 1; i < this.length; i++) {
      current = current?.next;
      if (i == rotate_val && current) {
        this.head = current;
        if (previous) {
          this.tail = previous;
          this.tail.next = null;
        }
      }

      previous = current ? current : null;
    }
    return this;
  }
}

let list = new SimpleLinkedList([1, 2, 3, 4, 5]);

console.log(list.rotate(3));
console.log(list.rotate(1));
console.log(list.rotate(5));
console.log(list.rotate(8));
