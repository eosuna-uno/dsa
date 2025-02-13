import { assertEquals } from "jsr:@std/assert/equals";

function sameFrecuency(num1: number, num2: number) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < str2.length; i++) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }

    if (map2.has(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }
  for (const key of map2.keys()) {
    if (map1.get(key) !== map2.get(key)) return false;
  }
  return true;
}

assertEquals(sameFrecuency(182, 281), true);
assertEquals(sameFrecuency(34, 14), false);
assertEquals(sameFrecuency(3589578, 5879385), true);
assertEquals(sameFrecuency(22, 222), false);
