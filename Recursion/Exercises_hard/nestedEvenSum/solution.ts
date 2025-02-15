import { assertEquals } from "jsr:@std/assert/equals";

//this was actually harder took me probably 1 hour?
function nested_even_sum(obj: Record<any, any>): number {
  let sum = 0;

  const helper = (
    obj: Record<any, any>,
    keys: string[],
    key_index: number = 0
  ) => {
    if (key_index >= keys.length) return;
    const currentVal = obj[keys[key_index]];
    if (typeof currentVal == "number" && currentVal % 2 == 0) {
      sum += currentVal;
    }
    if (currentVal instanceof Object && currentVal.constructor === Object) {
      const newkeys = Object.keys(currentVal);
      helper(currentVal, newkeys, 0);
    }
    helper(obj, keys, ++key_index);
  };
  const keys = Object.keys(obj);
  helper(obj, keys, 0);
  return sum;
}

Deno.test({
  name: "nested even sum solution",
  fn: () => {
    assertEquals(
      nested_even_sum({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      }),
      6
    );
    assertEquals(
      nested_even_sum({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: "car" },
      }),
      10
    );
  },
});
