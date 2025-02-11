import { assertEquals } from "jsr:@std/assert/equals";

function construct_note(msg: string, letters: string) {
  const letter_map: Map<string, number> = new Map();
  for (const letter of letters) {
    const cur_letter = letter_map.get(letter);
    if (cur_letter !== undefined) {
      letter_map.set(letter, cur_letter + 1);
    } else {
      letter_map.set(letter, 0);
    }
  }
  for (const letter of msg) {
    const cur_count = letter_map.get(letter);
    if (cur_count !== undefined && cur_count >= 0) {
      letter_map.set(letter, cur_count - 1);
    } else {
      return false;
    }
  }
  return true;
}

assertEquals(construct_note("aa", "abc"), false);
assertEquals(construct_note("aa", "abc"), false);
assertEquals(construct_note("abc", "dcba"), true);
assertEquals(construct_note("abc", "abcd"), true);

assertEquals(construct_note("aabbcc", "bcabcaddff"), true);
