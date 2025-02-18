import { mergeSort } from "./merge_sort.js";
import { merge_sort } from "./merge_sort.ts";

Deno.bench("compare 1 ts", { group: "timing", baseline: true }, () => {
  merge_sort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
  merge_sort([0, -10, 7, 4]); // [-10, 0, 4, 7]
  merge_sort([1, 2, 3]); // [1, 2, 3]
  merge_sort([]);

  var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
  ];
  merge_sort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

  var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

  function strComp(a: string, b: string) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }

  merge_sort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

  function oldestToYoungest(a: Record<string, any>, b: Record<string, any>) {
    return b.age - a.age;
  }

  merge_sort(moarKittyData, oldestToYoungest); // sorted by age in descending order
});

Deno.bench("compare 1 js", { group: "timing" }, function () {
  mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
  mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
  mergeSort([1, 2, 3]); // [1, 2, 3]
  mergeSort([]);

  var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
  ];
  mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

  var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

  function strComp(a: any, b: any) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }

  mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

  mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
});
