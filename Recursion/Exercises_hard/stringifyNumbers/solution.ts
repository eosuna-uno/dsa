import { assertEquals } from "jsr:@std/assert/equals";

function stringify_numbers(obj: Record<any, any>): Record<any, any> {
  const new_obj: Record<any, any> = {};

  const helper = (obj: Record<any, any>, keys: string[], key_index: number) => {
    const currentVal = obj[keys[key_index]];
    if (key_index === keys.length) return;
    if (typeof currentVal === "number") {
      new_obj[keys[key_index]] = currentVal.toString();
    } else {
      new_obj[keys[key_index]] = currentVal;
    }

    if (currentVal instanceof Object && currentVal.constructor === Object) {
      //instead of calling helper can call stringify to do recursive correctly
      new_obj[keys[key_index]] = stringify_numbers(currentVal);
    }
    helper(obj, keys, ++key_index);
  };
  helper(obj, Object.keys(obj), 0);
  return new_obj;
}

Deno.test({
  name: "stringify Numbers in object return new object",
  fn: () => {
    assertEquals(stringify_numbers({ test: 1, test2: [] }), {
      test: "1",
      test2: [],
    });
    assertEquals(
      stringify_numbers({
        num: 1,
        test: [],
        data: {
          val: 4,
          info: {
            isRight: true,
            random: 66,
          },
        },
      }),
      {
        num: "1",
        test: [],
        data: {
          val: "4",
          info: {
            isRight: true,
            random: "66",
          },
        },
      }
    );
  },
});
