import { assertArrayIncludes } from "jsr:@std/assert";
import { assertEquals } from "jsr:@std/assert/equals";

function find_all_duplicates(arr: number[]) {
  const counts = new Set();
  const dups = [];
  for (const item of arr) {
    if (counts.has(item)) {
      dups.push(item);
    } else {
      counts.add(item);
    }
  }
  return dups;
}

assertSameArray(find_all_duplicates([4, 3, 2, 7, 8, 2, 3, 1]), [2, 3]);
assertSameArray(find_all_duplicates([4, 3, 2, 1, 0]), []);
assertSameArray(find_all_duplicates([4, 3, 2, 1, 0, 1, 2, 3]), [2, 3, 1]);

function assertSameArray(arr1: any[], arr2: any[]) {
  assertEquals(arr1.length, arr2.length, "arrays are not equal length");
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr2.length; i++) {
    assertEquals(
      arr2[i],
      arr1[i],
      "array values are not equals at index:[" + i + "]"
    );
  }
}
