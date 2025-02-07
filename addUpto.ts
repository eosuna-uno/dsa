function addUpTo(n: number) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total = total + i;
  }
  return total;
}
function addUpTo2(n: number) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo(5));
