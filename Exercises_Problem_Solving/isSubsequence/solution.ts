import { assertEquals } from "jsr:@std/assert/equals";

function is_subsequence(sub_str: string, complete_str: string): boolean {
  let current_pointer = 0;

  for (const char of complete_str) {
    if (sub_str[current_pointer] == char) {
      current_pointer++;
    }
  }
  if (current_pointer == sub_str.length) {
    return true;
  }
  return false;
}

assertEquals(is_subsequence("hello", "hello world"), true); // true
assertEquals(is_subsequence("sing", "sting"), true); // true
assertEquals(is_subsequence("abc", "abracadabra"), true); // true
assertEquals(is_subsequence("abc", "acb"), false); // false (order matters)
