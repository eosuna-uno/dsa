//Time O(N) Space O(1)
//one loop on array

import { assertEquals } from "jsr:@std/assert/equals";

//arr is always natural numbers
function min_subarray_length(arr: number[], goal: number): number {
  let min_goal_len = +Infinity;
  let current_len = 0;
  let sum = 0;
  let index = 0;
  while (index <= arr.length) {
    if (sum >= goal) {
      sum -= arr[index - current_len];
      current_len--;
      if (sum >= goal) {
        min_goal_len = current_len;
        continue;
      }
    }
    sum += arr[index];
    current_len++;
    if (sum >= goal) {
      if (current_len < min_goal_len) {
        min_goal_len = current_len;
      }
    }
    index++;
  }
  if (min_goal_len == Infinity) return 0;
  return min_goal_len;
}
/*
sum  2 + 3 +1 +2
- 2 + 4 = 10
-3 =  7
+3 = 9 -1 -2
[2, 3, 1, 2, 4, 3]*/
assertEquals(min_subarray_length([2, 3, 1, 2, 4, 3], 7), 2); // 2 -> because [4,3] is the smallest subarray
assertEquals(min_subarray_length([2, 1, 6, 5, 4], 9), 2); // 2 -> because [5,4] is the smallest subarray
assertEquals(
  min_subarray_length([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
  1
); // 1 -> because [62] is greater than 52
assertEquals(min_subarray_length([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3); // 3
assertEquals(min_subarray_length([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5); // 5
assertEquals(min_subarray_length([4, 3, 3, 8, 1, 2, 3], 11), 2); // 2
assertEquals(min_subarray_length([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0); // 0
