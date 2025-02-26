import { assert } from "jsr:@std/assert/assert";
import { NONE, Node, StackOrNone, StackOrVal } from "./node.ts";
export class Stack<T> {
  public first: StackOrNone<T> = NONE;
  public last: StackOrNone<T> = NONE;
  public size: number = 0;
  constructor(initial_push: T[]) {
    initial_push.map((val: T) => this.push(val));
  }
  public push(val: StackOrVal<T>) {
    const node = this.to_node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      if (this.first != NONE) {
        node.next = this.first;
        this.first = node;
      } else {
        assert(false, "this piece of code should never be true");
      }
    }
    this.size++;
    return this.size;
  }
  public pop() {
    if (this.size === 0) return NONE;
    const poped = this.first;
    if (this.size === 1) {
      this.first = NONE;
      this.last = NONE;
      this.size = 0;
    } else {
      //first is not gonna be NONE
      this.first = (this.first as Node<T>).next;
      this.size--;
      (poped as Node<T>).next = NONE;
    }
    return poped;
  }
  private to_node(val: StackOrVal<T>) {
    if (val instanceof Node) {
      return val;
    }
    return new Node(val);
  }
}
