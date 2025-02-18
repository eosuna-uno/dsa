function pivot_helper() {}

function pick_pivot(
  arr: number[],
  start_index: number = 0,
  end_index: number = arr.length
) {
  let count = 0;
  end_index = end_index || arr.length;
  for (let i of arr) count += i;
  const mid = count / end_index;
  let min_distance = +Infinity;
  let index_min_distance = 0;
  for (let i = start_index; i < end_index; i++) {
    const dist = Math.abs(arr[i] - mid);
    if (dist < min_distance) {
      min_distance = dist;
      index_min_distance = i;
    }
  }
  return index_min_distance;
}
function pick_pivot_ps(
  arr: number[],
  start_index: number = 0,
  end_index: number = arr.length
) {
  function swap(arr: number[], id_1: number, id_2: number) {
    const temp = arr[id_1];
    arr[id_1] = arr[id_2];
    arr[id_2] = temp;
  }
  end_index = end_index || arr.length;
  if (start_index >= end_index) return start_index;
  const pivot_val = arr[start_index];
  let pivot_index = start_index;
  for (let i = start_index + 1; i < arr.length; i++) {
    if (pivot_val > arr[i]) {
      pivot_index++;
      swap(arr, i, pivot_index);
    }
  }
  swap(arr, start_index, pivot_index);
  return pivot_index;
}
function quick_sort_1(
  arr: number[],
  left: number = 0,
  right: number = arr.length
) {
  if (left < right) {
    let pivotIndex = pick_pivot_ps(arr, left, right);
    quick_sort_1(arr, left, pivotIndex - 1);
    quick_sort_1(arr, pivotIndex + 1, right);
  }
  return arr;
}
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quick_sort_1(arr));
