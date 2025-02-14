import { assertEquals } from "jsr:@std/assert/equals";

//this was actually harder took me probably 1 hour?
function flatten(arr: any[]): any[] {
  const ret_arr: any = [];
  const helper = (arr: any[], index: number = 0) => {
    if (arr === undefined) return;
    if (Array.isArray(arr) && index > arr.length) return;
    if (typeof arr[index] === "number") {
      ret_arr.push(arr[index]);
    } else if (Array.isArray(arr[index])) {
      helper(arr[index], 0);
    }
    helper(arr, ++index);
  };
  helper(arr);
  return ret_arr;
}

Deno.test({
  name: "flatten array",
  fn: () => {
    assertEquals(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
    assertEquals(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]);
    assertEquals(flatten([1, 2, [9, 10], [4, 5]]), [1, 2, 9, 10, 4, 5]);
    assertEquals(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
    assertEquals(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]);
    assertEquals(flatten([[1], [2], [3]]), [1, 2, 3]);
  },
});
