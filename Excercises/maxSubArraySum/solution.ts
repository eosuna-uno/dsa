import { assertEquals } from "jsr:@std/assert/equals";

//This algo should be Time O(N) Space O(1)
//in place 1 loop
function max_subarray_sum(arr: number[], win_length: number): number | null {
  if (arr.length < win_length) return null;
  let sum = first_sum(arr, win_length);
  let max_sum = sum;
  for (let i = win_length; i < arr.length; i++) {
    sum = sum - arr[i - win_length] + arr[i];
    if (sum > max_sum) max_sum = sum;
  }
  return max_sum;
}
/*n =3 
 
[0,1,2,3,4,5]*/
function first_sum(arr: number[], els: number): number {
  let sum = 0;

  for (let i = 0; i < els; i++) {
    sum += arr[i];
  }
  return sum;
}
assertEquals(max_subarray_sum([100, 200, 300, 400], 2), 700);
assertEquals(max_subarray_sum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39); // 39
assertEquals(max_subarray_sum([-3, 4, 0, -2, 6, -1], 2), 5); // 5
assertEquals(max_subarray_sum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), 5); // 5
assertEquals(max_subarray_sum([2, 3], 3), null);
