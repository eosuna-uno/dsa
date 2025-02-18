function insertion_sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let current_val = arr[i];
    let j = i - 1;
    for (; j >= 0 && current_val < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current_val;
  }
  return arr;
}

console.log("check", insertion_sort([2, 1, 9, 76, 4]));
