class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  remove(val) {
    var target = this.root;
    var parent;

    // FIND TARGET NODE, ASSIGN PARENT NODE
    while (target.value !== val) {
      parent = target;
      if (val < target.value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }

    // IF TARGET IS NOT THE ROOT
    if (target !== this.root) {
      // IF NO CHILD NODES
      if (target.left === null && target.right === null) {
        if (parent.left === target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        // IF TWO CHILDREN NODES - NOT WORKING: NEED TO REACH END-NODE
      } else if (target.left !== null && target.right !== null) {
        let rightParent = target;
        let right = target.right;
        if (right.left === null) {
          right.left = target.left;
          if (parent.left === target) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === target) {
            parent.left.value = right.value;
          } else {
            parent.right.value = right.value;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
        // IF ONE CHILD NODE
      } else {
        if (parent.left === target) {
          if (target.right === null) {
            parent.left = target.left;
          } else {
            parent.left = target.right;
          }
        } else {
          if (target.right === null) {
            parent.right = target.left;
          } else {
            parent.right = target.right;
          }
        }
      }
    }
    return target;
  }
}
