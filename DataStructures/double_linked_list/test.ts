import { assertEquals } from "jsr:@std/assert/equals";
import { DoubleLinkedList } from "./DoubleLinkedList.ts";

Deno.test({
  name: "double link lists test check",
  fn: () => {
    const list = new DoubleLinkedList<number | string>([1, 2, 3, 4, 5, 6]);
    assertEquals(list.length, 6);
    assertEquals(list.tail?.val, 6);
    assertEquals(list.pop()?.val, 6);
    assertEquals(list.length, 5);
    assertEquals(list.tail?.val, 5);
    const shifted = list.shift();
    assertEquals(shifted?.val, 1);
    assertEquals(shifted?.next, null);
    assertEquals(shifted?.prev, null);
    assertEquals(list.head?.val, 2);
    assertEquals(list.length, 4);

    const unshifted = list.unshift(5);
    assertEquals(unshifted?.head?.val, 5);
    assertEquals(list.length, 5);
    assertEquals(unshifted?.head?.next?.val, 2);

    const get = list.get(4);
    assertEquals(get?.val, 5);
    assertEquals(list.get(0)?.val, 5);
    assertEquals(list.get(1)?.val, 2);
    assertEquals(list.get(3)?.val, 4);
    assertEquals(list.get(2)?.val, 3);
    assertEquals(list.get(-1), null);
    assertEquals(list.get(5), null);

    assertEquals(list.set(0, 1), true);
    assertEquals(list.get(0)?.val, 1);
    assertEquals(list.set(2, 99), true);
    assertEquals(list.get(0)?.prev, null);
    assertEquals(list.get(0)?.next?.val, 2);
    assertEquals(list.set(-1, 0), false);
    assertEquals(list.set(5, 0), false);
    const list2 = new DoubleLinkedList<number | string>([1, 2, 3, 4, 5, 6]);
    assertEquals(list2.insert(2, "inserted"), true);
    const check_2 = list2.get(2);
    assertEquals(check_2?.val, "inserted");
    assertEquals(list2.length, 7);
    assertEquals(check_2?.prev?.val, 2);
    assertEquals(check_2?.next?.val, 3);
    assertEquals(check_2?.prev?.next?.val, "inserted");
    assertEquals(check_2?.next?.prev?.val, "inserted");
    list2.insert(0, 2);
    assertEquals(list2.head?.val, 2);
    assertEquals(list2.length, 8);
    list2.insert(list2.length, 99);
    assertEquals(list2.tail?.val, 99);
    assertEquals(list2.length, 9);

    const list3 = new DoubleLinkedList<number | string>([1, 2, 3, 4, 5, 6]);
    const removed = list3.remove(2);
    assertEquals(removed?.val, 3);
    assertEquals(list3.length, 5);
    assertEquals(list3.get(2)?.val, 4);
    assertEquals(list3.get(1)?.val, 2);
  },
});

Deno.test({
  name: "unshift course",
  fn: () => {
    var doublyLinkedList = new DoubleLinkedList<number>([]);
    doublyLinkedList.unshift(5); // doublyLinkedList
    assertEquals(doublyLinkedList.length, 1); // 1
    assertEquals(doublyLinkedList.head?.val, 5); // 5
    assertEquals(doublyLinkedList.tail?.val, 5); // 5
    doublyLinkedList.unshift(10);
    doublyLinkedList.length; // 2
    assertEquals(doublyLinkedList.head?.val, 10); // 10
    assertEquals(doublyLinkedList.head?.next?.val, 5); // 5
    assertEquals(doublyLinkedList.tail?.val, 5); // 5
    doublyLinkedList.unshift(15);
    doublyLinkedList;
    assertEquals(doublyLinkedList.length, 3); // 3
    assertEquals(doublyLinkedList.head?.val, 15); // 15
    assertEquals(doublyLinkedList.tail?.val, 5); // 5
    assertEquals(doublyLinkedList.head?.next?.next?.val, 5); // 5
  },
});

Deno.test({
  name: "reverse dll",
  fn: () => {
    let doublyLinkedList = new DoubleLinkedList<number>([]);
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.reverse(); // singlyLinkedList;
    doublyLinkedList.length; // 4
    assertEquals(doublyLinkedList.head?.val, 20); // 20
    assertEquals(doublyLinkedList.head?.next?.val, 15); // 15
    assertEquals(doublyLinkedList.head?.next?.next?.val, 10); // 10
    assertEquals(doublyLinkedList.head?.next?.next?.next?.val, 5); // 5
  },
});
