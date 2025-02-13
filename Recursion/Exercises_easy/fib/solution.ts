import { assertEquals } from "jsr:@std/assert/equals";

function fib(num: number): number {
  if (num <= 0) return 0;
  if (num == 1) return 1;
  if (num == 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
Deno.test({
  name: "recursion fib",
  fn: () => {
    assertEquals(fib(4), 3);
    assertEquals(fib(10), 55);
    assertEquals(fib(28), 317811);
    assertEquals(fib(35), 9227465);
  },
});
