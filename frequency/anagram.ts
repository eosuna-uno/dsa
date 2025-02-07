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

assertEquals(anagram("", ""), true);
assertEquals(anagram("aaz", "zaz"), false);
assertEquals(anagram("anagram", "nagaram"), true);
assertEquals(anagram("rat", "car"), false);
assertEquals(anagram("awesome", "awesom"), false);
assertEquals(anagram("qwerty", "qeywrt"), true);
assertEquals(anagram("texttwisttime", "timetwisttext"), true);
