export function get_digit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
export function digit_count(num: number) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function most_digits(nums: number[]): number {
  let max_count = 0;
  for (const i of nums) {
    max_count = Math.max(max_count, digit_count(i));
  }
  return max_count;
}
