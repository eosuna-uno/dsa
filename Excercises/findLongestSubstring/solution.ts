import { assertEquals } from "jsr:@std/assert/equals";

function find_longest_substring(str: string): number {
  const set = new Set();
  let longest_str = 0;
  let index = 0;
  let first_index: number = 0;
  while (index < str.length) {
    if (set.has(str[index])) {
      set.delete(str[first_index]);
      first_index++;
      continue;
    } else {
      set.add(str[index]);
      index++;
    }
    if (set.size > longest_str) longest_str = set.size;
  }
  return longest_str;
}
Deno.test({
  name: "find longest substring",
  fn: () => {
    assertEquals(find_longest_substring(""), 0);
    assertEquals(find_longest_substring("rithmschool"), 7);
    assertEquals(find_longest_substring("thisisawesome"), 6);
    assertEquals(find_longest_substring("thecatinthehat"), 7);
    assertEquals(find_longest_substring("bbbbbb"), 1);
    assertEquals(find_longest_substring("longestsubstring"), 8);
    assertEquals(find_longest_substring("thisishowwedoit"), 6);
  },
});
