import { assertEquals } from "jsr:@std/assert";
function anagram(str1: string, str2: string): boolean {
  if (str1.length != str2.length) return false;
  const map1 = strToMapCounter(str1);
  const map2 = strToMapCounter(str2);
  for (const [key, val] of map1) {
    if (map2.get(key) != val) return false;
  }
  return true;
}

function less_size_anagram(str1: string, str2: string): boolean {
  if (str1.length != str2.length) return false;
  const map1 = strToMapCounter(str1);
  for (const char of str2) {
    const current_val = map1.get(char);
    if (current_val) {
      map1.set(char, current_val - 1);
      if (current_val == 0) return false;
    } else {
      return false;
    }
  }

  return true;
}

function strToMapCounter(str: string): Map<string, number> {
  const return_map = new Map();
  for (const char of str) {
    const val = return_map.get(char);
    if (val) {
      return_map.set(char, val + 1);
    } else {
      return_map.set(char, 1);
    }
  }
  return return_map;
}

assertEquals(less_size_anagram("", ""), true);
assertEquals(less_size_anagram("aaz1", "zaa1"), true);
assertEquals(less_size_anagram("anagram", "nagaram"), true);
assertEquals(less_size_anagram("rat", "car"), false);
assertEquals(less_size_anagram("awesome", "awesom"), false);
assertEquals(less_size_anagram("qwerty", "qeywrt"), true);
assertEquals(less_size_anagram("texttwisttime", "timetwisttext"), true);
