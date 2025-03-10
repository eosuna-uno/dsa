import { assertEquals } from "jsr:@std/assert/equals";

export function get_digit(number: number, place: number): number {
  number = Math.abs(number);
  const num1 = Math.floor(number / 10 ** place);
  const num2 = Math.floor(number / 10 ** (place + 1)) * 10;
  return num1 - num2;
}
//this is better because have less operations, a response from stack overflow,
//still i did mine in 5 minutes
//mine did twice the operations.2 divides, 2 pows 2 floors, 1 multiplication by 10, and 1 Math.abs
//stack response did operations. 1 pow, 1 abs, 1 floor, and 2 divs (1 division and 1 modulo)
//and mine did not work with negative numbers (something that i fixed adding the Math.abs)
function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
assertEquals(get_digit(-12345, 1), 4);
assertEquals(get_digit(12345, 0), 5);

assertEquals(get_digit(12345, 3), 2);

assertEquals(getDigit(12345, 1), 4);
assertEquals(getDigit(12345, 0), 5);

assertEquals(getDigit(12345, 3), 2);

Deno.bench("my get_digit", { group: "get_digit", baseline: true }, function () {
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
  get_digit(2435262345, 7);
  get_digit(3498584359, 5);
  get_digit(2435262234345, 4);
  get_digit(2423435262345, 2);
  get_digit(2435263452345, 3);
  get_digit(24352634562345, 1);
  get_digit(243543262345, 6);
});

Deno.bench("stacko get_digit", { group: "get_digit" }, function () {
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
  getDigit(2435262345, 7);
  getDigit(3498584359, 5);
  getDigit(2435262234345, 4);
  getDigit(2423435262345, 2);
  getDigit(2435263452345, 3);
  getDigit(24352634562345, 1);
  getDigit(243543262345, 6);
});
