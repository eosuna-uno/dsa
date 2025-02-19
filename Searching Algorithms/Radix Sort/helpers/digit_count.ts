import { assertEquals } from "jsr:@std/assert/equals";

//I created this function in less than 5 minutes, but video solution is better with just 4 calculations
//abs, floor, log10, and +1
//by deno bench, my code is 40.7 time slower than other solution
function digit_count(
  num: number,
  from: number = 0,
  breakOnSmaller: boolean = true
): number {
  let i = from;
  while (true) {
    const val = Math.abs(num) / Math.pow(10, i);
    if (val < 1) {
      if (breakOnSmaller) return NaN;
      i--;
    } else if (val < 10) {
      return i + 1;
    } else {
      i++;
    }
  }
}
function digit_count_sol(num: number) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function max_digits_in(arr: number[]) {
  let max_count = 0;
  for (const num of arr) {
    const count = digit_count(num, max_count);
    if (count > max_count) {
      max_count = count;
    }
  }
  return max_count;
}
assertEquals(digit_count(12345, 6), NaN);

assertEquals(digit_count(12345, 0), 5);

assertEquals(digit_count_sol(12345), 5);

assertEquals(digit_count_sol(351243), 6);
assertEquals(max_digits_in([1345, 2234, 3342, 41236, 579789789]), 9);
assertEquals(max_digits_in([1345, 2234, 3342, 3343, 789]), 4);

Deno.bench(
  "my digit_count",
  { group: "digit_count", baseline: true },
  function () {
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
    digit_count(2435262345);
    digit_count(3498584359);
    digit_count(2435262234345);
    digit_count(2423435262345);
    digit_count(2435263452345);
    digit_count(24352634562345);
    digit_count(243543262345);
  }
);

Deno.bench("sol digit_count", { group: "digit_count" }, function () {
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
  digit_count_sol(2435262345);
  digit_count_sol(3498584359);
  digit_count_sol(2435262234345);
  digit_count_sol(2423435262345);
  digit_count_sol(2435263452345);
  digit_count_sol(24352634562345);
  digit_count_sol(243543262345);
});
