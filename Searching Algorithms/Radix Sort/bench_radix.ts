import { radix_sort } from "./radix.ts";
function getDigit(num: number, i: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums: number[]) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: any[] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function get_random_int(max: number = 10000000000) {
  return Math.floor(Math.random() * max);
}
function create_unsorted_array_of_integers(length: number = 10000): number[] {
  let arr: number[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(get_random_int());
  }
  return arr;
}
let arrs: number[][] = [];
for (let i = 0; i < 100; i++) {
  arrs.push(create_unsorted_array_of_integers());
}

Deno.bench("my radix", { group: "radix_sort", baseline: true }, () => {
  for (const arr of arrs) {
    radix_sort(arr);
  }
});

Deno.bench("other radix", { group: "radix_sort" }, () => {
  for (const arr of arrs) {
    radixSort(arr);
  }
});
