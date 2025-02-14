import { assertEquals } from "jsr:@std/assert/equals";

//this was actually harder took me probably 1 hour?
function capitalize_first(arr: string[]): string[] {
  const ret_array: string[] = [];
  const helper = (arr: string[], index = 0) => {
    if (index >= arr.length) return;
    ret_array.push(arr[index][0].toUpperCase() + arr[index].substring(1));
    helper(arr, ++index);
  };
  helper(arr);
  return ret_array;
}

Deno.test({
  name: "flatten array",
  fn: () => {
    assertEquals(capitalize_first(["car", "taco", "banana"]), [
      "Car",
      "Taco",
      "Banana",
    ]);
  },
});
