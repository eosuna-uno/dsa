import { Node } from "./node.ts";

export class BinarySearchTree<T> {
  root: Node<T> | null = null;
  constructor() {
    this.root = null;
  }

  insert(val: T) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      let current_node = this.root;
      while (current_node) {
        if (val > current_node.value) {
          //go to right
          if (current_node.right instanceof Node) {
            current_node = current_node.right;
            continue;
          } else {
            current_node.right = new Node(val);
            break;
          }
        } else if (val < current_node.value) {
          if (current_node.left instanceof Node) {
            current_node = current_node.left;
            continue;
          } else {
            current_node.left = new Node(val);
            break;
          }
          //go to left
        } else {
          //values are equal we dont need to do anything
          break;
        }
      }
    }
    return this;
  }
  find(val: T) {
    if (!this.root) return null;
    if (this.root && this.root.value === val) {
      return this.root;
    }
    let current: Node<T> | null = this.root;
    while (current) {
      if (current && current.value === val) return current;
      if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      }
    }
    return null;
  }
  find_parent(val: T) {
    if (!this.root) return null;
    if (this.root && this.root.value === val) {
      return this.root;
    }
    let current: Node<T> | null = this.root;
    while (current) {
      if (current.left?.value === val || current.right?.value === val)
        return current;
      if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      }
    }
    return null;
  }
  remove(val: T) {
    const node = this.find(val);
    if (!node) return false;
    //leaf node
    if (!node.left && !node.right) {
      //this is find we dont need to do it anymore
      const parent = this.find_parent(val);
      if (parent && parent.left && parent.left.value === val) {
        parent.left = null;
      }
      if (parent && parent.right && parent.right.value === val) {
        parent.right = null;
      }
    } else if ((node.left && !node.right) || (node.right && !node.left)) {
      //only one child
      const parent = this.find_parent(val);
      if (parent && parent.left && parent.left.value === val) {
        if (node.left) parent.left = node.left;
        if (node.right) parent.right = node.right;
      } else if (parent && parent.right && parent.right.value === val) {
        if (node.right) parent.right = node.right;
        if (node.left) parent.right = node.left;
      }
    } else if (node.left && node.right) {
      const minim = this.find_minium(node.right);
      if (minim) {
        this.remove(minim?.value);
        node.value = minim.value;
        return;
      }
    }
  }
  /** This method finds the maximum value of childs of this node */
  find_minium(node: Node<T>) {
    let current = node;
    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return node;
      }
    }
    return null;
  }

  find_second_largest() {
    if (!this.root) return undefined;
    if (!this.root.right && !this.root.left) {
      return undefined;
    }

    if (!this.root.right) return this.root.value;
    if (!this.root.right.right) return this.root.value;
    let current = this.root.right;
    while (current.right && !current.right.right) {
      current = current.right;
    }
    return current.value;
  }

  find_root_lens() {
    if (!this.root) return null;
    const left = this.root.left;
    const right = this.root.right;
    const left_count = this.get_longest(left ? left : null);
    const right_count = this.get_longest(right ? right : null);
    return [left_count, right_count];
  }
  is_balanced() {
    const branches = this.find_root_lens();
    if (branches) {
      const diff = Math.abs(branches[0] - branches[1]);
      if (diff > 1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  get_longest(node: Node<T> | null): number {
    const count = 0;
    if (node) {
      if (node.left) {
        return 1 + this.get_longest(node.left);
      }
      if (node.right) {
        return 1 + this.get_longest(node.right);
      }
    } else {
      return count;
    }
    return 1;
  }
  bfs() {
    const arr_q = []; // change this to an actual queue for better performance
    const visited = [];
    if (!this.root) return false;
    arr_q.push(this.root);
    let current_node = arr_q.shift();
    while (current_node) {
      if (current_node.left) arr_q.push(current_node.left);
      if (current_node.right) arr_q.push(current_node.right);
      visited.push(current_node.value);
      current_node = arr_q.shift();
    }
    console.log(visited);
    return visited;
  }

  dfs(init_node: Node<T> | null = this.root, side: "left" | "right" = "left") {
    const visited: T[] = [];
    let traverse = (node: Node<T>) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    if (side === "right") {
      traverse = (node: Node<T>) => {
        visited.push(node.value);
        if (node.right) traverse(node.right);
        if (node.left) traverse(node.left);
      };
    }
    if (init_node) {
      traverse(init_node);
    }
    return visited;
  }

  dfs_post_order(
    init_node: Node<T> | null = this.root,
    side: "left" | "right" = "left"
  ) {
    const visited: T[] = [];
    let traverse = (node: Node<T>) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    if (side === "right") {
      traverse = (node: Node<T>) => {
        if (node.right) traverse(node.right);
        if (node.left) traverse(node.left);
        visited.push(node.value);
      };
    }
    if (init_node) {
      traverse(init_node);
    }
    return visited;
  }
  dfs_in_order(
    init_node: Node<T> | null = this.root,
    side: "left" | "right" = "left"
  ) {
    const visited: T[] = [];
    let traverse = (node: Node<T>) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    if (side === "right") {
      traverse = (node: Node<T>) => {
        if (node.right) traverse(node.right);
        visited.push(node.value);
        if (node.left) traverse(node.left);
      };
    }
    if (init_node) {
      traverse(init_node);
    }
    return visited;
  }
}
const tree = new BinarySearchTree<number>();
/*
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(18);

tree.insert(16);

tree.insert(19);
tree.insert(7);
tree.insert(9);
tree.insert(3);
tree.remove(10);
1 + 1;*/
/*let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.find_second_largest();*/
1 + 1;
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.find_root_lens();
console.log(binarySearchTree.is_balanced());
1 + 1;

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.is_balanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.is_balanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.is_balanced()); // false
binarySearchTree.bfs();

let t = new BinarySearchTree();
t.insert(10);
t.insert(6);
t.insert(15);
t.insert(3);
t.insert(8);
t.insert(20);
console.log(t.dfs_post_order());
