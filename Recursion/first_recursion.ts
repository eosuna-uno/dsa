function count_down(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  count_down(num);
}

count_down(10);
function factorial(num: number): number {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(10));

function collectOddValues(arr: number[]): number[] {
  let newArr = [];

  if (arr.length === 0) {
    return [];
  }

  if (arr[0] % 2 !== 0) {
    console.log("pushing");
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

function collectOddValuesSameArr(arr: number[], index: number = 0): number[] {
  let newArr = [];
  if (arr.length === 0 || arr.length == index) {
    return [];
  }
  if (arr[index] % 2 !== 0) {
    newArr.push(arr[index]);
  }

  newArr = newArr.concat(collectOddValuesSameArr(arr, ++index));
  return newArr;
}
console.log(collectOddValuesSameArr([1, 2, 3, 4, 5]));
