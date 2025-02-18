function selection_sort<T>(
  arr: any[],
  comparator: ((a: T, b: T) => number) | null
): number[] {
  let default_compare = (a: number, b: number) => a - b;
  let used_comparator = comparator || default_compare;
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      const val = used_comparator(arr[j], arr[minimum]);

      if (val > 0) minimum = j;
    }
    swap(arr, i, minimum);
  }
  return arr;
}
function swap(arr: number[], id_1: number, id_2: number) {
  let temp = arr[id_1];
  arr[id_1] = arr[id_2];
  arr[id_2] = temp;
}

const arr = selection_sort([4, 8, 3, 99, 8, 9, 10, 5678, 34, 39, 99], null);
console.log(arr);
