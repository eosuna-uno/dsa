import { SimpleNode } from "./SimpleNode.ts";
import { SimpleLinkedList } from "./SimpleLinkedList.ts";
import { assertEquals } from "jsr:@std/assert/equals";
const list = new SimpleLinkedList([1, 2, 3, 4, 5, 6]);

Deno.test({
  name: "create simple linked list",
  fn: () => {
    const sll = new SimpleLinkedList([1]);
    assertEquals(
      sll.head?.val,
      sll.tail?.val,
      "head and val should be the same on "
    );
    assertEquals(sll.length, 1);
    sll.shift();
    assertEquals(sll.head?.val, undefined);
    assertEquals(sll.length, 0);
    assertEquals(
      sll.head?.val,
      undefined,
      "should remain undefined after a shift on empty list"
    );
    assertEquals(sll.length, 0, "should remain 0 after a shift on empty list");
    sll.unshift(5);
    assertEquals(sll.head?.val, 5);
    assertEquals(sll.length, 1);
    sll.pop();
    assertEquals(sll.head?.val, undefined);
    assertEquals(sll.length, 0);
    sll.pop();
    assertEquals(
      sll.head?.val,
      undefined,
      "should remain undefined after a pop on empty list"
    );
    assertEquals(sll.length, 0, "should remain 0 after a pop on empty list");
    sll.push(10);
    assertEquals(sll.tail?.val, 10);
    assertEquals(sll.length, 1);
    sll.push(5);
    sll.push(12);
    sll.push(16);
    sll.push(20);
    assertEquals(sll.find(20), 4);
    assertEquals(sll.get(0)?.val, 10);
    assertEquals(sll.get(4)?.val, 20);

    sll.set(1, 3);
    assertEquals(sll.get(1)?.val, 3);
    assertEquals(sll.length, 5);
    sll.set(2, 3);
    assertEquals(sll.get(2)?.val, 3);
    assertEquals(sll.length, 5);

    sll.insert(3, 8);
    assertEquals(sll.get(3)?.val, 8);
    assertEquals(sll.length, 6);
    sll.insert(4, 12);
    assertEquals(sll.get(4)?.val, 12);
    assertEquals(sll.length, 7);
    sll.insert(7, 80);
    assertEquals(sll.get(7)?.val, 80);
    assertEquals(sll.length, 8);
    sll.insert(7, 70);
    assertEquals(sll.get(7)?.val, 70);
    assertEquals(sll.get(7)?.next?.val, 80);
    assertEquals(sll.length, 9);

    const removed = sll.remove(3);
    assertEquals(removed?.val, 8);
    assertEquals(sll.get(3)?.val, 12);
    assertEquals(sll.length, 8);
    const list = new SimpleLinkedList([1, 2, 3, 4]);
    list.reverse();
    assertEquals(list.head?.val, 4);
    assertEquals(list.head?.next?.val, 3);
    assertEquals(list.tail?.val, 1);
    assertEquals(list.tail?.next, null);
  },
});

Deno.test({
  name: "pop tests",
  fn: () => {
    let simpleLinkedList = new SimpleLinkedList<number>([]);

    simpleLinkedList.push(5); // singlyLinkedList
    assertEquals(simpleLinkedList.length, 1); // 1
    assertEquals(simpleLinkedList.head?.val, 5); // 5
    assertEquals(simpleLinkedList.tail?.val, 5); // 5

    simpleLinkedList.push(10); // singlyLinkedList
    assertEquals(simpleLinkedList.length, 2); // 2
    assertEquals(simpleLinkedList.head?.val, 5); // 5
    assertEquals(simpleLinkedList.head?.next?.val, 10); // 10
    assertEquals(simpleLinkedList.tail?.val, 10); // 10

    simpleLinkedList.push(15); // singlyLinkedList
    assertEquals(simpleLinkedList.length, 3); // 3
    assertEquals(simpleLinkedList.head?.val, 5); // 5
    assertEquals(simpleLinkedList.head?.next?.val, 10); // 10
    assertEquals(simpleLinkedList.head?.next?.next?.val, 15); // 15
    assertEquals(simpleLinkedList.tail?.val, 15); // 15
    console.log(simpleLinkedList);
    assertEquals(simpleLinkedList.pop()?.val, 15); // 15
    assertEquals(simpleLinkedList.tail?.val, 10); // 10
    assertEquals(simpleLinkedList.length, 2); // 2
    assertEquals(simpleLinkedList.pop()?.val, 10); // 10
    assertEquals(simpleLinkedList.length, 1); // 1
    assertEquals(simpleLinkedList.pop()?.val, 5); // 5
    assertEquals(simpleLinkedList.length, 0); // 0
    assertEquals(simpleLinkedList.pop(), null); // undefined
    assertEquals(simpleLinkedList.length, 0); // 0
  },
});

Deno.test({
  name: "deno pop",
  fn: () => {
    var singlyLinkedList = new SimpleLinkedList<number>([]);
    singlyLinkedList.push(5)?.push(10)?.push(15)?.push(20);
    assertEquals(singlyLinkedList.insert(2, 12), true); // true
    assertEquals(singlyLinkedList.insert(100, 12), false); // false
    assertEquals(singlyLinkedList.length, 5); // 5
    assertEquals(singlyLinkedList.head?.val, 5); // 5
    assertEquals(singlyLinkedList.head?.next?.val, 10); // 10
    assertEquals(singlyLinkedList.head?.next?.next?.val, 12); // 12
    assertEquals(singlyLinkedList.head?.next?.next?.next?.val, 15); // 15
    assertEquals(singlyLinkedList.head?.next?.next?.next?.next?.val, 20); // 20

    singlyLinkedList.insert(5, 25); // true
    assertEquals(singlyLinkedList.head?.next?.next?.next?.next?.next?.val, 25); //25
    assertEquals(singlyLinkedList.tail?.val, 25);
  },
});
const sh = new SimpleLinkedList([1]);
console.log("shift0", sh.shift(), sh);
console.log("newhead:", list.head);
assertEquals(list.head?.val, 1, "unshit properly handled");

/*
while (true) {
  console.log(`${node?.val} -> ${node?.next?.val}`, node);

  if (node) {
    node = node.next;
  } else {
    node = null;
  }
  if (node === null) break;
}
*/

Deno.test({
  name: " rotate",
  fn: () => {
    var singlyLinkedList = new SimpleLinkedList<number>([]);
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    assertEquals(singlyLinkedList.head?.val, 5); // 5
    assertEquals(singlyLinkedList.tail?.val, 25); // 25

    singlyLinkedList.rotate(3);
    assertEquals(singlyLinkedList.head?.val, 20); // 20
    assertEquals(singlyLinkedList.head?.next?.val, 25); // 25
    assertEquals(singlyLinkedList.head?.next?.next?.val, 5); // 5
    assertEquals(singlyLinkedList.head?.next?.next?.next?.val, 10); // 10
    assertEquals(singlyLinkedList.head?.next?.next?.next?.next?.val, 15); // 15
    assertEquals(singlyLinkedList.tail?.val, 15); // 15
    assertEquals(singlyLinkedList.tail?.next, null); // null

    var singlyLinkedList = new SimpleLinkedList<number>([]);
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    assertEquals(singlyLinkedList.head?.val, 5); // 5
    assertEquals(singlyLinkedList.tail?.val, 25); // 25

    singlyLinkedList.rotate(-1);
    assertEquals(singlyLinkedList.head?.val, 25); // 25
    assertEquals(singlyLinkedList.head?.next?.val, 5); // 5
    assertEquals(singlyLinkedList.head?.next?.next?.val, 10); // 10
    assertEquals(singlyLinkedList.head?.next?.next?.next?.val, 15); // 15
    assertEquals(singlyLinkedList.head?.next?.next?.next?.next?.val, 20); // 20
    assertEquals(singlyLinkedList.tail?.val, 20); // 20
    assertEquals(singlyLinkedList.tail?.next, null); // null

    var singlyLinkedList = new SimpleLinkedList<number>([]);
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    assertEquals(singlyLinkedList.head?.val, 5); // 5
    assertEquals(singlyLinkedList.tail?.val, 25); // 25

    singlyLinkedList.rotate(1000);
    assertEquals(singlyLinkedList.head?.val, 5); // 5
    assertEquals(singlyLinkedList.head?.next?.val, 10); // 10
    assertEquals(singlyLinkedList.head?.next?.next?.val, 15); // 15
    assertEquals(singlyLinkedList.head?.next?.next?.next?.val, 20); // 20
    assertEquals(singlyLinkedList.head?.next?.next?.next?.next?.val, 25); // 25
    assertEquals(singlyLinkedList.tail?.val, 25); // 25
    assertEquals(singlyLinkedList.tail?.next, null); // null
  },
});
