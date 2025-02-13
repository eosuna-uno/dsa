# Recursion


### Objectives
- Define what recursion is
- Understand two essential components of a recursive function
- Visualize the callstack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

### What is recursion?
A process that call itself (function).

Why is this needed?, because it is everywhere.
Examples of functions that use recursion.

- JSON.parse \ JSON.stringify
- document.getElementById and DOM Traversal Algorithms
- Object Traversal
- We will see it with more complex data structures
- Sometimes is cleaner than fors/whiles

### how fns work in js

In almost all programming langs, there is a build data structure that manages what happens when we call a function 

#### The stack
- It's a **stack** data structure - we'll talk about that later!
- Any time a function is invoked it is placed (pushed) on top of the call stack
- When javascript sees the **return** or the function ends, the program will remove (**pop**) the function from the stack

### How recursive functions work

Invoke the same function with **different input** until you reach the **base case**

### Base case
This is the condition when the recursion stops
> [!NOTE]
> Really important

### different input
This is the second most important feature. the new inputs need to be different

### first recursive function
```javascript
function count_down(num) {

  if (num <= 0){
    console.log("All done!")
    return ;
  }
  console.log(num);
  num--;
  count_down(num);
}
```

### Helper method recursion
Is a non-recursive function that inside, declares a function that is recursive.
