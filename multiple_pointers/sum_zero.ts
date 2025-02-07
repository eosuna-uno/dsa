import { assertEquals } from "jsr:@std/assert";

function naive_sum_zero(arr: number[]): number[] | undefined {
  for (let pointer = 0; pointer < arr.length - 1; pointer++)
    for (let i = pointer + 1; i < arr.length; i++) {
      if (arr[pointer] + arr[i] == 0) return [arr[pointer], arr[i]];
    }
  return undefined;
}

function dbl_sum_zero(numbers: number[]) {
  if (numbers[0] >= 0) return undefined;
  let pointer_1 = 0;
  let pointer_2 = numbers.length - 1;
  while (true) {
    const res = numbers[pointer_1] + numbers[pointer_2];
    if (res == 0) return [numbers[pointer_1], numbers[pointer_2]];
    if (res > 0) pointer_2 = pointer_2 - 1;
    if (res < 0) {
      pointer_1 = pointer_1 + 1;
    }
    if (numbers[pointer_1] >= 0) return undefined;
  }
}

assertEquals(dbl_sum_zero([-3, -2, -1, 1, 2, 3]), [-3, 3]);
assertEquals(dbl_sum_zero([-2, 1, 3]), undefined);
assertEquals(dbl_sum_zero([1, 2, 3]), undefined);
assertEquals(dbl_sum_zero([-4, -1, 1, 2, 3]), [-1, 1]);
