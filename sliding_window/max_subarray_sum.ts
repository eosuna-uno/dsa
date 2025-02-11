import { assertEquals } from "jsr:@std/assert";

function max_subarray_sum_naive(arr: number[], n: number): number | null {
  if (arr.length <= 0) return null;
  let start_index_max = 0;
  let max_sum = Number.NEGATIVE_INFINITY;
  const last_index_checked = arr.length - n;
  for (let i = 0; i <= last_index_checked; i++) {
    const current_sum = sum_nexts(arr, i, n);
    if (current_sum > max_sum) {
      max_sum = current_sum;
      start_index_max = i;
    }
  }
  return max_sum;
}
function sum_nexts(arr: number[], start_index: number, n: number): number {
  let sum = 0;
  for (let i = start_index; i < start_index + n; i++) {
    sum += arr[i];
  }
  return sum;
}
function max_subarray_sum_window(arr: number[], n: number): number | null {
  if (arr.length == 0) return null;
  let max_sum = sum_nexts(arr, 0, n);
  let current_sum = max_sum;
  for (let i = n; i < arr.length; i++) {
    current_sum = current_sum - arr[i - n] + arr[i];
    if (current_sum > max_sum) max_sum = current_sum;
  }
  return max_sum;
}
/*
    i
[1, 2, 5, 2, 8, 1, 5]
    i + n
max_sum = 3
n = 2
*/
assertEquals(max_subarray_sum_window([1, 2, 5, 2, 8, 1, 5], 2), 10);
assertEquals(max_subarray_sum_window([1, 2, 5, 2, 8, 1, 5], 4), 17);
assertEquals(max_subarray_sum_window([4, 2, 1, 6], 1), 6);
assertEquals(max_subarray_sum_window([4, 2, 1, 6, 2], 4), 13);
assertEquals(max_subarray_sum_window([], 2), null);
