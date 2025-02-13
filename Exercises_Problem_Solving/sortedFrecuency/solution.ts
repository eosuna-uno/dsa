import { assertEquals } from "jsr:@std/assert/equals";

function sorted_frencuency(arr: number[], find: number): number {
  let min = 0;
  let max = arr.length - 1;
  let min_find = 0;
  //find minimum
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (arr[middle] === find && arr[middle - 1] !== find) {
      min_find = middle;
      break;
    }
    if (arr[middle] >= find) {
      max = middle - 1;
    }
    if (arr[middle] < find) {
      min = middle + 1;
    }
  }

  min = 0;
  max = arr.length - 1;

  let max_find = Infinity;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (arr[middle] === find && arr[middle + 1] !== find) {
      max_find = middle;
      break;
    }
    if (arr[middle] > find) {
      max = middle - 1;
    }
    if (arr[middle] <= find) {
      min = middle + 1;
    }
  }
  if (max_find == Infinity) return -1;
  return max_find - min_find + 1;
}

//Suggested solution here
Deno.test({
  name: "sortedFrecuency",
  fn: () => {
    assertEquals(sorted_frencuency([1, 1, 2, 2, 2, 2, 3], 2), 4); // 4 )
    assertEquals(sorted_frencuency([1, 1, 2, 2, 2, 2, 3], 3), 1); // 1
    assertEquals(sorted_frencuency([1, 1, 2, 2, 2, 2, 3], 1), 2); // 1
    assertEquals(sorted_frencuency([1, 1, 2, 2, 2, 2, 3], 4), -1); // 1
  },
});
