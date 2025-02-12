import { assertEquals } from "jsr:@std/assert/equals";

function find_rotated_index(arr: number[], find: number): number {
  const pivot_index = find_pivot(arr);
  let [min_index, max_index] = get_index_to_search(arr, find, pivot_index);

  while (min_index <= max_index) {
    const middle = Math.floor((min_index + max_index) / 2);
    if (arr[middle] == find) return middle;
    if (arr[middle] > find) {
      max_index = middle - 1;
    }
    if (arr[middle] < find) {
      min_index = middle + 1;
    }
  }
  return -1;
}

function get_index_to_search(
  arr: number[],
  find: number,
  pivot_index: number
): [number, number] {
  if (find > arr[0]) {
    return [0, pivot_index - 1];
  } else {
    return [pivot_index, arr.length];
  }
}

function find_pivot(arr: number[]): number {
  const previous_item = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (previous_item >= arr[i]) return i;
  }
  return NaN;
}

Deno.test({
  name: "find_rotated_index",
  fn: () => {
    assertEquals(find_rotated_index([3, 4, 1, 2], 4), 1); // 1
    assertEquals(find_rotated_index([6, 7, 8, 9, 1, 2, 3, 4], 8), 2); // 2
    assertEquals(find_rotated_index([6, 7, 8, 9, 1, 2, 3, 4], 3), 6); // 6
    assertEquals(find_rotated_index([37, 44, 66, 102, 10, 22], 14), -1); // -1
    assertEquals(find_rotated_index([6, 7, 8, 9, 1, 2, 3, 4], 12), -1); // -1
    assertEquals(
      find_rotated_index([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16),
      5
    ); // 5
  },
});
