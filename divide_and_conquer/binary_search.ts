import { assertEquals } from "jsr:@std/assert/equals";

function binary_search_naive(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return NaN;
}
function binary_search_div_conq(arr: number[], value: number): number {
  let cur_index = Math.floor(arr.length / 2);
  let prev_index = cur_index;
  while (true) {
    if (arr[cur_index] == value) return cur_index;
    if (arr[cur_index] > value) {
      // set new index higher
      cur_index = cur_index - Math.floor((arr.length - cur_index) / 2);
    }
    if (arr[cur_index] < value) {
      // set new index lower
      cur_index = cur_index + Math.floor((arr.length - cur_index) / 2);
    }
    if (prev_index == cur_index) return NaN;
    prev_index = cur_index;
  }
}

assertEquals(binary_search_div_conq([1, 2, 3, 4, 5, 6], 4), 3);
assertEquals(binary_search_div_conq([1, 2, 3, 4, 5, 6], 6), 5);
assertEquals(binary_search_div_conq([1, 2, 3, 4, 5, 6], 11), NaN);
