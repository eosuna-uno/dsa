import { assertEquals } from "jsr:@std/assert/equals";

function recursive_range(num: number, current: number = 0): number {
  if (num == current) return current;
  return current + recursive_range(num, ++current);
}

//this does not use extra parameter
function recursive_range2(num: number): number {
  if (num == 1) return 1;
  return num + recursive_range2(--num);
}
function range(num: number): number {
  return (num * (1 + num)) / 2;
}
Deno.test({
  name: "product of array",
  fn: () => {
    assertEquals(recursive_range(3), 6);
    assertEquals(recursive_range(4), 10);
    assertEquals(recursive_range(6), 21);
    assertEquals(recursive_range(9), 45);
    assertEquals(recursive_range(12), 78);
    assertEquals(recursive_range(15), 120);
    assertEquals(recursive_range(200), 20100);
    assertEquals(recursive_range(123), 7626);
    assertEquals(recursive_range(5623), 15811876);
    assertEquals(recursive_range(0), 0);
    assertEquals(recursive_range(678), 230181);
  },
});

Deno.test({
  name: "Recursive range with Time (1) range",
  fn: () => {
    assertEquals(recursive_range(3), range(3));
    assertEquals(recursive_range(4), range(4));
    assertEquals(recursive_range(6), range(6));
    assertEquals(recursive_range(9), range(9));
    assertEquals(recursive_range(12), range(12));
    assertEquals(recursive_range(15), range(15));
    assertEquals(recursive_range(200), range(200));
    assertEquals(recursive_range(123), range(123));
    assertEquals(recursive_range(5623), range(5623));
    assertEquals(recursive_range(0), range(0));
    assertEquals(recursive_range(678), range(678));
  },
});
