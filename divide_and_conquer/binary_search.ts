import { assertEquals } from "jsr:@std/assert/equals";

//this is O(N)
function binary_search_naive(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return NaN;
}

//div and conq is O(Log(N))! this is my own implementation, it can surely be improved
function binary_search_div_conq(arr: number[], value: number): number {
  let cur_index = Math.floor(arr.length / 2);
  let prev_index = null;
  let steps = 0;
  while (true) {
    if (steps == 10) return NaN;
    if (arr[cur_index] == value) return cur_index;
    if (arr[cur_index] > value) {
      cur_index = Math.floor(cur_index / 2);
    } else if (arr[cur_index] < value) {
      cur_index = Math.ceil((cur_index + arr.length) / 2);
    } else if (prev_index == 0 || prev_index == arr.length) return NaN;

    prev_index = cur_index;
  }
}
//improved algo
function binary_search(arr: number[], val: number) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let current_val = arr[middle];
    if (current_val < val) {
      min = middle + 1;
    } else if (current_val > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return NaN;
}

assertEquals(binary_search([1, 2, 3, 4, 5, 6], 4), 3);
assertEquals(binary_search([1, 2, 3, 4, 5, 6], 6), 5);
assertEquals(binary_search([1, 2, 3, 4, 5, 6], 11), NaN);
assertEquals(binary_search([1, 2, 3, 4, 5, 10], 6), NaN);
assertEquals(binary_search([1, 10, 15, 26, 33, 40, 50, 60, 90, 120], 10), 1);

assertEquals(binary_search([1, 10, 15, 26, 33, 40, 50, 60, 90, 120], 90), 8);

assertEquals(binary_search([1, 10, 15, 26, 33, 40, 50, 60, 90, 120], 120), 9);

assertEquals(binary_search([1, 10, 15, 26, 33, 40, 50, 60, 90, 120], 1), 0);
