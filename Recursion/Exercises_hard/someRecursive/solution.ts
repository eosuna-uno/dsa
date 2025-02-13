import { assertEquals } from "jsr:@std/assert/equals";

function some(arr: number[], callback: (num: number) => boolean): boolean {
  if (arr.length === 0) return false;
  const helper = (index: number = 0) => {
    if (index == arr.length) return false;
    const res = callback(arr[index]);
    if (res == true) return true;
    return helper(++index);
  };
  return helper();
}

function isOdd(num: number) {
  return num % 2 !== 0;
}
Deno.test({
  name: "Recursive reverse string",
  fn: () => {
    assertEquals(some([1, 2, 3, 4], isOdd), true); // true
    assertEquals(some([4, 6, 8, 9], isOdd), true); // true
    assertEquals(some([4, 6, 8], isOdd), false); // false
    assertEquals(
      some([4, 6, 8], (val) => val > 10),
      false
    ); // false
  },
});
