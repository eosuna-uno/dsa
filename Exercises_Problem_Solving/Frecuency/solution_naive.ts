function sameFrequency(num1: number, num2: number) {
  const arr1 = num1
    .toString()
    .split("")
    .map((str) => Number(str))
    .sort((a, b) => a - b);
  const arr2 = num2
    .toString()
    .split("")
    .map((str) => Number(str))
    .sort((a, b) => a - b);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
  // good luck. Add any arguments you deem necessary.
}

/*JS solution
function sameFrequency(num1, num2){
    const arr1 = num1.toString().split("").sort((a,b) => a-b)
    const arr2 = num2.toString().split("").sort((a,b) => a-b)
    if(arr1.length !== arr2.length) return false
    for(let i =0 ; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
  // good luck. Add any arguments you deem necessary.
}
*/
