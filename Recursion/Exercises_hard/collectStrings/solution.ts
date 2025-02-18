import { assertEquals } from "jsr:@std/assert/equals";

function collect_strings(obj: Record<any, any>): string[] {
  const new_array: string[] = [];

  const helper = (
    in_obj: Record<any, any>,
    keys: string[],
    current_index: number = 0
  ) => {
    if (current_index >= keys.length) return;
    const current_val = in_obj[keys[current_index]];
    if (typeof current_val == "string") {
      new_array.push(current_val);
    }
    if (current_val instanceof Object && current_val.constructor === Object) {
      const newkeys = Object.keys(current_val);
      helper(current_val, newkeys, 0);
    }
    helper(in_obj, keys, ++current_index);
  };
  const keys = Object.keys(obj);
  helper(obj, keys, 0);
  return new_array;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

Deno.test({
  name: "collect string test",
  fn: () => {
    assertEquals(collect_strings(obj), ["foo", "bar", "baz"]);
  },
});
