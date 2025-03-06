import { assertEquals } from "jsr:@std/assert/equals";
import { MaxBinaryHeap } from "./max_binary_heap.ts";

Deno.test({
  name: "test insert binary heap",
  fn: () => {
    let x = new MaxBinaryHeap();
    x.insert(41);
    x.insert(39);
    x.insert(33);
    x.insert(18);
    x.insert(27);
    x.insert(12);
    x.insert(55);
    assertEquals(x.values[0], 55);
  },
});

Deno.test({
  name: "test remove binary heap",
  fn: () => {
    let x = new MaxBinaryHeap();
    x.insert(41);
    x.insert(39);
    x.insert(33);
    x.insert(18);
    x.insert(27);
    x.insert(12);
    x.insert(55);
    assertEquals(x.extract_max(), 55);
    assertEquals(x.values.length, 6);
  },
});
