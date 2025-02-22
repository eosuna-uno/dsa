export class SimpleNode<T> {
  public val: T | null = null;
  public next: SimpleNode<T> | null = null;
  constructor(val: T, next: SimpleNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
  set_next(next: SimpleNode<T> | null): SimpleNode<T> | null {
    const prev_next = this.next;
    this.next = next;
    return prev_next;
  }

  set_val(val: T | null) {
    this.val = val;
  }
  get_val(): T | null {
    return this.val;
  }
}
