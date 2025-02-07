import { assertEquals } from "jsr:@std/assert";
function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length != arr2.length) return false;
  const map_squared = new Map();
  for (let sq of arr1) {
    sq = sq ** 2;
    if (map_squared.has(sq)) {
      map_squared.set(sq, map_squared.get(sq) + 1);
    } else map_squared.set(sq, 1);
  }
  for (const num of arr2) {
    if (map_squared.has(num)) {
      map_squared.set(num, map_squared.get(num) - 1);
    }
  }
  for (const [_num, val] of map_squared) {
    if (val != 0) return false;
  }
  return true;
}

assertEquals(same([1, 2, 3], [4, 1, 9]), true);
assertEquals(same([1, 2, 3], [1, 9]), false);
assertEquals(same([1, 2, 1], [4, 4, 1]), false);
