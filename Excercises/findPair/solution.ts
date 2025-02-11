import { assertEquals } from "jsr:@std/assert/equals";

//this should be Time O(N) Space O(N)
function find_pair_1(arr: number[], n: number): boolean {
  const map = new Set();
  for (const item of arr) {
    map.add(item - n);
  }
  for (const item of arr) {
    if (map.has(item)) {
      return true;
    }
  }
  return false;
}

// this should be time O(n log n) space O(1)
function find_pair_2(arr: number[], n: number): boolean {
  if (n < 0) arr.sort((a, b) => a - b);
  else arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] === n) return true;
  }
  return false;
}
[1, 2, 4, 4, 6, 10];
assertEquals(find_pair_2([6, 1, 4, 10, 2, 4], 2), true); // true
assertEquals(find_pair_2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1), true); // true*/
assertEquals(find_pair_2([4, -2, 3, 10], -6), true); // true
assertEquals(find_pair_2([6, 1, 4, 10, 2, 4], 22), false); // false
assertEquals(find_pair_2([], 0), false); // false
assertEquals(find_pair_2([5, 5], 0), true); // true
assertEquals(find_pair_2([-4, 4], -8), true); // true
assertEquals(find_pair_2([-4, 4], 8), true); // true
assertEquals(find_pair_2([1, 3, 4, 6], -2), true); // true
assertEquals(find_pair_2([0, 1, 3, 4, 6], -2), true); // true
/**/
