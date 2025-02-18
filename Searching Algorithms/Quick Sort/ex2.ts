import { assertEquals } from "jsr:@std/assert/equals";
type comparatorFunction<T> = ((a: T, b: T) => number) | null;

function pick_pivot_ps<T>(
  arr: T[],
  comparator: comparatorFunction<T> = null,
  start_index: number = 0,
  end_index: number = arr.length
) {
  function swap<T2>(arr: T2[], id_1: number, id_2: number) {
    const temp = arr[id_1];
    arr[id_1] = arr[id_2];
    arr[id_2] = temp;
  }
  let comp = ((a: number, b: number) => a - b) as any;
  if (typeof comparator == "function") {
    comp = comparator;
  }
  end_index = end_index || arr.length;
  if (start_index >= end_index) return start_index;
  const pivot_val = arr[start_index];
  let pivot_index = start_index;
  for (let i = start_index + 1; i < arr.length; i++) {
    const val = comp(pivot_val, arr[i]);
    if (val > 0) {
      pivot_index++;
      swap(arr, i, pivot_index);
    }
  }
  swap(arr, start_index, pivot_index);
  return pivot_index;
}
function quick_sort<T>(
  arr: T[],
  comparator: comparatorFunction<T> = null,
  left: number = 0,
  right: number = arr.length
) {
  if (left < right) {
    let pivotIndex = pick_pivot_ps(arr, comparator, left, right);
    quick_sort(arr, comparator, left, pivotIndex - 1);
    quick_sort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
//console.log(assertEquals(quick_sort_1(arr));
assertEquals(quick_sort([4, 20, 12, 10, 7, 9]), [4, 7, 9, 10, 12, 20]); // [4, 7, 9, 10, 12, 20]
assertEquals(quick_sort([0, -10, 7, 4]), [-10, 0, 4, 7]); // [-10, 0, 4, 7]
assertEquals(quick_sort([1, 2, 3]), [1, 2, 3]); // [1, 2, 3]
assertEquals(quick_sort([]), []);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
assertEquals(
  quick_sort(nums),
  [
    2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546,
    4342,
  ]
); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a: string, b: string) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

assertEquals(quick_sort(kitties, strComp), [
  "Blue",
  "Garfield",
  "Grumpy",
  "Heathcliff",
  "LilBub",
]); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a: any, b: any) {
  return b.age - a.age;
}

assertEquals(quick_sort(moarKittyData, oldestToYoungest), [
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Grumpy",
    age: 6,
  },
  {
    name: "Blue",
    age: 1,
  },
]); // sorted by age in descending order
