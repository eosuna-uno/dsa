import { assertEquals } from "jsr:@std/assert/equals";

// time O(log n)
function count_zeroes(arr: number[]) {
  let min_index = 0;
  let max_index = arr.length - 1;

  while (min_index <= max_index) {
    const middle = Math.floor((min_index + max_index) / 2);
    if (
      arr[middle] == 0 &&
      (arr[middle - 1] == 1 || arr[middle - 1] == undefined)
    ) {
      //find, break this and return how many 0s
      return arr.length - middle;
    }
    if (arr[middle] == 0) {
      max_index = middle - 1;
    }
    if (arr[middle] == 1) {
      min_index = middle + 1;
    }
  }
  return 0;
}
Deno.test({
  name: "count zeroes",
  fn: () => {
    assertEquals(count_zeroes([1, 1, 1, 1, 0, 0]), 1); // 2
    assertEquals(count_zeroes([1, 0, 0, 0, 0]), 4); // 4
    assertEquals(count_zeroes([0, 0, 0]), 3); // 3
    assertEquals(count_zeroes([1, 1, 1, 1]), 0); // 0*/
  },
});
