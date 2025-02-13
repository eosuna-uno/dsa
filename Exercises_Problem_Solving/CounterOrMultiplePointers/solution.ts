import { assertEquals } from "jsr:@std/assert/equals";

function areThereDuplicates(...args: any[]) {
  // good luck. (supply any arguments you deem necessary.)
  const dup_map = new Map();
  for (const arg of args) {
    if (dup_map.has(arg)) return true;

    dup_map.set(arg, 0);
  }
  return false;
}
function dups_sort(...args: any[]) {
  args.sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] == args[i + 1]) return true;
  }
  return false;
}
assertEquals(dups_sort(1, 2, 3), false); // false
assertEquals(dups_sort(1, 2, 2), true); // true
assertEquals(dups_sort("a", "b", "c", "a"), true); //true
