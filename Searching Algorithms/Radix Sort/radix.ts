import { get_digit, most_digits } from "./helpers/helpers.ts";

export function _radix_sort(numbers: number[]) {
  const loops = most_digits(numbers);
  const map = new Map<number, number[]>();
  for (let i = 0; i < 10; i++) {
    map.set(i, []);
  }
  for (let i = 0; i < loops; i++) {
    for (const num of numbers) {
      const digit = get_digit(num, i);
      map.get(digit)?.push(num);
    }
    //put back, and then clear
    numbers = [];
    for (const [key, val] of map) {
      for (const num of val) numbers.push(num);
      map.set(key, []);
    }
  }
  return numbers;
}

export function radix_sort(numbers: number[]) {
  const loops = most_digits(numbers);
  for (let i = 0; i < loops; i++) {
    const arr: any[] = Array.from({ length: 10 }, () => []);
    for (let num = 0; num < numbers.length; num++) {
      const digit = get_digit(numbers[num], i);
      arr[digit].push(numbers[num]);
    }
    /*for (const num of numbers) {
      const digit = get_digit(num, i);
      arr[digit].push(num);
    }*/
    //put back, and then clear
    numbers = [].concat(...arr);

    /*for (const index_arr of arr) {
      for (const num of index_arr) numbers.push(num);
    }*/
  }
  return numbers;
}
