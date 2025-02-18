function bubble_sort<T>(
  arr: any[],
  comparator: ((a: T, b: T) => number) | null
) {
  let default_compare = (a: number, b: number) => a - b;
  let used_comparator = comparator || default_compare;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const val = used_comparator(arr[j], arr[j + 1]);
      console.log("checkthis", val);
      if (val > 0) swap(arr, j, j + 1);
    }
    console.log("check step", arr);
  }
  return arr;
}

function swap(arr: number[], id_1: number, id_2: number) {
  let temp = arr[id_1];
  arr[id_1] = arr[id_2];
  arr[id_2] = temp;
}
const arr = bubble_sort([4, 8, 3, 99, 8, 9, 10, 5678, 34, 39, 99], null);
console.log(arr);
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a: string, b: string) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log("string_bubble", bubble_sort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
