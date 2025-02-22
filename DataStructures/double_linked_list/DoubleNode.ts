export class DoubleNode<T> {
  public val: T | null = null;
  public next: DoubleNode<T> | null = null;
  public prev: DoubleNode<T> | null = null;
  constructor(
    val: T,
    prev: DoubleNode<T> | null = null,
    next: DoubleNode<T> | null = null
  ) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
  set_next(next: DoubleNode<T> | null): DoubleNode<T> | null {
    const prev_next = this.next;
    this.next = next;
    return prev_next;
  }
  set_prev(prev: DoubleNode<T> | null): DoubleNode<T> | null {
    const prev_prev = this.prev;
    this.prev = prev;
    return prev_prev;
  }
  set_val(val: T | null) {
    this.val = val;
  }
  get_val(): T | null {
    return this.val;
  }
}
