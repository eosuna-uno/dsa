import { assertEquals } from "jsr:@std/assert/equals";

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  function swap(arr, id_1, id_2) {
    const temp = arr[id_1];
    arr[id_1] = arr[id_2];
    arr[id_2] = temp;
  }
  if (typeof comparator != "function") {
    comparator = (a, b) => a - b;
  }
  if (start >= end) return start;
  const pivot_val = arr[start];
  let pivot_index = start;
  for (let i = start + 1; i < arr.length; i++) {
    const val = comparator(pivot_val, arr[i]);
    if (val > 0) {
      pivot_index++;
      swap(arr, i, pivot_index);
    }
  }
  swap(arr, start, pivot_index);
  return pivot_index;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

assertEquals(pivot(arr1), 3); // 3
assertEquals(pivot(arr2), 4); // 4
assertEquals(pivot(arr3, strLength), 1); // 1

assertEquals(
  arr1.slice(0, 3).sort((a, b) => a - b),
  [2, 3, 4]
); // [2, 3, 4]
assertEquals(
  arr1.slice(3).sort((a, b) => a - b),
  [5, 7, 8, 9, 10, 20]
); // [5, 7, 8, 9, 10, 20]

assertEquals(
  arr2.slice(0, 4).sort((a, b) => a - b),
  [0, 2, 4, 5]
); // [0, 2, 4, 5]
assertEquals(
  arr2.slice(4).sort((a, b) => a - b),
  [8, 10, 11, 12, 13, 16]
); // [8, 10, 11, 12, 13, 16]

assertEquals(arr3.slice(0, 1).sort(strLength), ["Blue"]); // ["Blue"]
assertEquals(arr3.slice(1).sort(strLength), [
  "LilBub",
  "Grumpy",
  "Garfield",
  "Heathcliff",
]); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
