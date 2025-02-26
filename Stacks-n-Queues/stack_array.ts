var stack: any[] = [];

stack.push("google.com");
stack.push("instagram.com");
stack.push("youtube.com");
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
stack.push("another");

/* ^--- this is almost the same as using unshift and shift (using the stack as the beginning [0] of the array) 
  push/pop is better as indexes are not getting shifted, but using unshift/shift they do get reindexed
*/
