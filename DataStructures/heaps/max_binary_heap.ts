export class MaxBinaryHeap {
  values: number[] = [];
  constructor() {}
  public insert(val: number) {
    this.values.push(val);
    this.buble_up(this.values.length - 1);
  }
  /** removes the max node */
  public extract_max() {
    this.swap(0, this.values.length - 1);
    const node_val = this.values.pop();
    this.sink_down(0);
    return node_val;
  }
  private sink_down(index: number) {
    while (true) {
      const [child_1, child_2] = this.get_childs(index);
      const max_index = this.return_idx_max_value(index, child_1, child_2);
      if (index === max_index) return;
      this.swap(index, max_index);
      index = max_index;
    }
  }
  private return_idx_max_value(
    index: number,
    child_1: number | null,
    child_2: number | null
  ) {
    let max = this.values[index];
    if (child_1 === null && child_2 === null) return index; //finish
    if (child_1) {
      max = Math.max(max, this.values[child_1]);
    }
    if (child_2) max = Math.max(max, this.values[child_2]);
    if (child_1 && this.values[child_1] === max) {
      return child_1;
    }
    if (child_2 && this.values[child_2] === max) {
      return child_2;
    }
    return index;
  }
  private get_parent_index(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private get_childs(index: number) {
    let child_1: number | null = 2 * index + 1;
    let child_2: number | null = 2 * index + 2;
    child_1 = child_1 < this.values.length ? child_1 : null;
    child_2 = child_2 < this.values.length ? child_2 : null;
    return [child_1, child_2];
  }
  buble_up(bubble_index: number) {
    let parent_index = this.get_parent_index(bubble_index);
    while (this.values[parent_index] < this.values[bubble_index]) {
      this.swap(parent_index, bubble_index);
      bubble_index = parent_index;
      parent_index = this.get_parent_index(bubble_index);
    }
  }

  private swap(idx_1: number, idx_2: number) {
    const temp = this.values[idx_1];
    this.values[idx_1] = this.values[idx_2];
    this.values[idx_2] = temp;
  }
}
