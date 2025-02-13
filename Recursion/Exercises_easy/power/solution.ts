import { assertEquals } from "jsr:@std/assert/equals";

function power(base: number, exponent: number): number {
  if (exponent <= 0) return 1;
  if (exponent == 1) return base;
  return base * power(base, --exponent);
}

Deno.test({
  name: "Recursion power",
  fn: () => {
    assertEquals(power(2, 0), Math.pow(2, 0));
    assertEquals(power(2, 2), Math.pow(2, 2));
    assertEquals(power(2, 4), Math.pow(2, 4));
    assertEquals(power(5, 8), Math.pow(5, 8));
    assertEquals(power(6, 3), Math.pow(6, 3));
    assertEquals(power(3, 9), Math.pow(3, 9));
  },
});
