import { assertEquals } from "jsr:@std/assert/equals";
import { PriorityQueue } from "./PriorityQueue.ts";
const firstExpectedArray = [
  {
    val: "zxc",
    priority: 26,
  },
  {
    val: "ls",
    priority: 30,
  },
  {
    val: "some val",
    priority: 50,
  },
  {
    val: "l",
    priority: 70,
  },
  {
    val: "ss",
    priority: 40,
  },
  {
    val: "l3",
    priority: 66,
  },
  {
    val: "lo",
    priority: 52,
  },
];
Deno.test({
  name: "some test",
  fn: () => {
    let x = new PriorityQueue<string>();
    x.enqueue(50, "some val");
    x.enqueue(70, "l");
    x.enqueue(40, "ss");
    x.enqueue(30, "ls");
    x.enqueue(26, "zxc");
    x.enqueue(66, "l3");
    x.enqueue(52, "lo");
    assertEquals(x.values, firstExpectedArray);
    const max = x.dequeue();
    assertEquals(max?.priority, 26);
    assertEquals(max?.val, "zxc");
  },
});
