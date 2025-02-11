import { assertEquals } from "jsr:@std/assert";
//arr is always sorted
function unique_values_naive(arr: number[]): number {
  let set = new Set(); //this is most likely O(N)
  for (const item of arr) {
    set.add(item);
  }
  return set.size;
}
function unique_values_no_set_naive(arr: number[]): number {
  const new_arr: number[] = []; // this is O(N^2)
  for (const item of arr) {
    if (!new_arr.includes(item)) {
      new_arr.push(item);
    }
  }
  return new_arr.length;
}
function unique_values_o_1_not_set_no_multiple(arr: number[]): number {
  let last_item = null;
  let count = 0;
  for (const item of arr) {
    if (last_item != item) {
      count++;
      last_item = item;
    }
  }
  return count;
}

function unique_values_multiple_pointer(arr: number[]) {
  let count = 0;
  let last_item = null;
  for (let i = 0; i < arr.length; i = i + 2) {
    if (last_item != arr[i]) {
      last_item = arr[i];
      count++;
    }
    if (Number.isFinite(arr[i + 1]) && last_item != arr[i + 1]) {
      last_item = arr[i + 1];
      count++;
    }
  }
  return count;
}

function unique_values_two_pointers(arr: number[]) {
  if (arr.length == 0) return 0;
  if (arr.length <= 2) {
    if (arr[0] == arr[1]) return 1;
    return 2;
  }
  let first_index = 0;
  let second_index = 1;
  const last_index = arr.length - 1;
  let count = 1;
  while (true) {
    if (arr[first_index] == arr[second_index]) {
      count++;
      second_index++;
    } else {
      first_index++;
      arr[first_index] = arr[second_index];
    }

    if (second_index > last_index) {
      // check last_element
      return first_index + 1;
    }
  }
}

assertEquals(
  unique_values_two_pointers([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2]),
  2
);
assertEquals(
  unique_values_two_pointers([
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 10, 10, 10,
    10, 13, 13, 13,
  ]),
  5
);
assertEquals(unique_values_two_pointers([]), 0);
assertEquals(unique_values_two_pointers([-3, -2, -1, 0, 1, 4, 6]), 7);
