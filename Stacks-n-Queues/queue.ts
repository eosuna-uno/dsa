import { assert } from "jsr:@std/assert/assert";
import { NONE, Node, StackOrNone, StackOrVal } from "./node.ts";

export class Queue<T> {
  first: StackOrNone<T> = NONE;
  last: StackOrNone<T> = NONE;
  size: number = 0;
  constructor(vals: StackOrVal<T>[] = []) {
    vals.map((v) => this.enqueue(v));
  }
  public enqueue(val: StackOrVal<T>) {
    const node = this.to_node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      (this.last as Node<T>).next = node;
      (node as Node<T>).next = NONE;
      this.last = node;
    }
    this.size++;
    return this.size;
  }
  public dequeue() {
    if (this.size == 0) {
      this.first = NONE;
      this.last = NONE;
      return NONE;
    }
    const poped = this.first;
    if (this.size === 1) {
      this.first = NONE;
      this.last = NONE;
    } else if (poped instanceof Node && poped.next instanceof Node) {
      this.first = poped.next;
      poped.next = NONE;
    } else {
      assert(false, "this code should not run");
    }
    this.size--;
    return poped;
  }
  private to_node(node: StackOrVal<T>) {
    if (node instanceof Node) {
      return node;
    }
    return new Node(node);
  }
}
