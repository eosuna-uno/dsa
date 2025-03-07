export function hash_crude(val: string, length: number = 10) {
  let total: number = 0;
  for (let c of val) {
    total = (total + c.charCodeAt(0) - 96) % length;
  }
  return total;
}

//improve the time complexity to constant, and spread the hash values
//length and WEIRD_PRIME should be prime
export function hash(val: string, length: number = 7907) {
  let total: number = 0;
  const WEIRD_PRIME = 31 as const;
  for (let i = 0; i < Math.min(val.length, 100); i++) {
    total = (total * WEIRD_PRIME + val[i].charCodeAt(0)) % length;
  }
  return total;
}
console.log(hash("pink"));
console.log(hash("cyan"));
console.log(hash("purple"));
console.log(hash("yellow"));
console.log(hash("redwine"));
console.log(hash("pallet"));
