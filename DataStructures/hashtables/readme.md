### Hashtables

Important points in a hash function for regular usage is:
- Small change in input, should change the output greatly.
- The collisions should be kept at a minimum.
- The hashing function ideally should be running in constant time
- 

#### Collision
When collision occurs different strategies can be use to save the information:

##### Separate Chaining
The separate chaining strategy consist in saving multiple entries, index with another array, the first element being the key, and the second being the value

##### Linear probing
The linear probing strategy consist in saving the value in the next available space in the array.

In our implementation we will use separate chaining

