import { assertEquals } from "jsr:@std/assert/equals";

//try Time O(N) Space O(1), in place, 1 for
function average_pair(arr: number[], target: number): boolean {
  if (arr.length < 2) return false;
  const int_target = target * 2;
  let pt1 = 0;
  let pt2 = arr.length - 1;
  while (pt1 !== pt2) {
    const calc = arr[pt1] + arr[pt2];
    if (calc == int_target) {
      return true;
    }
    if (calc < int_target) {
      pt1++;
    } else {
      pt2--;
    }
  }
  return false;
}

assertEquals(average_pair([1, 2, 3], 2.5), true); // true
assertEquals(average_pair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true); // true
assertEquals(average_pair([-1, 0, 3, 4, 5, 6], 4.1), false); // false
assertEquals(average_pair([], 4), false); // false*/
