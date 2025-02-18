function linear_search(arr: number[], val: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return -1;
}

console.log(linear_search([1, 2, 3], 2));
function binarySearch(arr: number[], val: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] == val) return middle;
    if (arr[middle] > val) right = middle - 1;
    if (arr[middle] < val) left = middle + 1;
  }
  return -1;
  // add whatever parameters you deem necessary - good luck!
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
