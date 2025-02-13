import { assertEquals } from "jsr:@std/assert/equals";

function product_array(num: number[], index: number = 0): number {
  if (num.length == 0) return 0;
  if (index == num.length) return 1;

  return num[index] * product_array(num, ++index);
}

Deno.test({
  name: "product of array",
  fn: () => {
    assertEquals(product_array([1, 2, 3, 0]), 0);
    assertEquals(product_array([0]), 0);
    assertEquals(product_array([3]), 3);
    assertEquals(product_array([1]), 1);
    assertEquals(product_array([]), 0);
    assertEquals(product_array([1, 2, 3]), 6);
    assertEquals(product_array([1, 2, 3, 5]), 30);
    assertEquals(product_array([1, 2, 3, 8]), 48);
    assertEquals(product_array([1, 2, 3, 7]), 42);
    assertEquals(product_array([1, 2, 3, 6]), 36);
    assertEquals(product_array([1, 2, 3, 9]), 54);
    assertEquals(product_array([1, 2, 5, 2, 9, 10, 12]), 21600);
  },
});
