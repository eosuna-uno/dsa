export const NONE = Symbol("NONE");
export type StackOrNone<T> = Node<T> | typeof NONE;
export type StackOrVal<T> = Node<T> | T;
export class Node<T> {
  public value: T;
  public next: StackOrNone<T>;
  constructor(val: T, next: StackOrNone<T> = NONE) {
    this.value = val;
    this.next = next;
  }
}
