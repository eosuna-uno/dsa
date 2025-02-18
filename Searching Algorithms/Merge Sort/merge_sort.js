export function mergeSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

function merge(arr1, arr2, comparator) {
  // add whatever parameters you deem necessary - good luck!

  let i = 0;
  let j = 0;
  let totalLength = arr1.length + arr2.length;
  let mergeArr = [];

  while (totalLength > 0) {
    for (i = 0; i < arr1.length && j < arr2.length; i++) {
      if (typeof comparator !== "function") {
        if (arr1[i] < arr2[j]) {
          mergeArr.push(arr1[i]);
        } else {
          mergeArr.push(arr2[j]);
          j++;
          i--;
        }
      } else {
        if (comparator(arr1[i], arr2[j]) < 0) {
          mergeArr.push(arr1[i]);
        } else {
          mergeArr.push(arr2[j]);
          j++;
          i--;
        }
      }
      totalLength--;
    }

    while (i < arr1.length) {
      mergeArr.push(arr1[i]);
      i++;
      totalLength--;
    }

    while (j < arr2.length) {
      mergeArr.push(arr2[j]);
      j++;
      totalLength--;
    }
  }

  return mergeArr;
}
Deno.test({
  name: "other people merge sort",
  fn: () => {
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

    function strComp(a, b) {
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

    function oldestToYoungest(a, b) {
      return b.age - a.age;
    }

    mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
  },
});
