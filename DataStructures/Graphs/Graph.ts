import { Stack } from "../Stacks-n-Queues/link_list_stack.ts";
import { NONE } from "../Stacks-n-Queues/node.ts";
import { Queue } from "../Stacks-n-Queues/queue.ts";

//undirected graph
export class Graph {
  private adjacencyList: Map<string, any[]> = new Map();
  constructor() {
    this.adjacencyList = new Map();
  }

  add_vertex(vertex_name: string) {
    if (this.adjacencyList.has(vertex_name)) {
      return false;
    } else {
      this.adjacencyList.set(vertex_name, []);
      return true;
    }
  }
  add_edge(vertex_name: string, to_vertex: string) {
    const arr = this.adjacencyList.get(vertex_name);
    if (Array.isArray(arr) && !arr.includes(to_vertex)) {
      arr.push(to_vertex);
    }
    const arr2 = this.adjacencyList.get(to_vertex);
    if (Array.isArray(arr2) && !arr2.includes(vertex_name)) {
      arr2.push(vertex_name);
    }
  }

  remove_edge(vertex_name: string, v2: string) {
    const arr = this.adjacencyList.get(vertex_name);
    if (Array.isArray(arr) && arr.includes(v2)) {
      this.adjacencyList.set(
        vertex_name,
        arr.filter((val) => val !== v2)
      );
    }
    const arr2 = this.adjacencyList.get(v2);
    if (Array.isArray(arr2) && arr2.includes(vertex_name)) {
      this.adjacencyList.set(
        v2,
        arr2.filter((val) => val !== vertex_name)
      );
    }
  }

  remove_vertex(vertex_name: string) {
    const vertex = this.adjacencyList.get(vertex_name);
    if (vertex) {
      for (const v of vertex) {
        this.remove_edge(vertex_name, v);
      }
      //last step
      this.adjacencyList.delete(vertex_name);
    }
  }
  //search deepeing before widening
  dfs(initial_vertex: string) {
    let result: string[] = [];
    let visited: Record<string, boolean> = {};
    const helper = (vertex_name: string) => {
      const vertex = this.adjacencyList.get(vertex_name);
      if (!vertex) {
        return;
      }
      result.push(vertex_name);
      visited[vertex_name] = true;
      for (const v of vertex) {
        if (visited[v]) continue;
        helper(v);
      }
    };
    helper(initial_vertex);
    return result;
  }

  dfs_stack(initial_vertex: string) {
    let s = new Stack<string>([]);
    let result: string[] = [];
    let visited_s = new Set<string>();
    let visited: Record<string, boolean> = {};
    if (!this.adjacencyList.has(initial_vertex)) return [];
    visited[initial_vertex] = true;
    s.push(initial_vertex);
    while (s.size) {
      const vtx = s.pop();
      if (vtx != NONE) {
        if (visited_s.has(vtx.value)) {
          continue;
        }
        visited_s.add(vtx.value);
        result.push(vtx.value);
        const val = this.adjacencyList.get(vtx.value);
        if (Array.isArray(val)) {
          for (const v of val) {
            s.push(v);
          }
        }
      }
    }
    return result;
  }

  bfs(init_vertex: string) {
    let Q = new Queue<string>();
    let visited = new Set();
    let result: string[] = [];
    const helper = () => {
      const v_name = Q.dequeue();
      if (v_name === NONE) return;
      if (!visited.has(v_name.value)) {
        result.push(v_name.value);
        visited.add(v_name.value);
        let arr = this.adjacencyList.get(v_name.value);
        if (arr && Array.isArray(arr))
          for (let n of arr) {
            Q.enqueue(n);
          }
      }
      if (Q.size > 0) helper();
    };
    Q.enqueue(init_vertex);
    helper();
    return result;
  }
}

let x = new Graph();
x.add_vertex("Mazatlan");
x.add_vertex("Guadalajara");
x.add_vertex("Rosario");

x.add_edge("Mazatlan", "Rosario");
x.add_edge("Mazatlan", "Guadalajara");
console.log(x.dfs("Mazatlan"));
console.log(x);

let g = new Graph();

g.add_vertex("A");
g.add_vertex("B");
g.add_vertex("C");
g.add_vertex("D");
g.add_vertex("E");
g.add_vertex("F");

g.add_edge("A", "B");
g.add_edge("A", "C");
g.add_edge("B", "D");
g.add_edge("C", "E");
g.add_edge("D", "E");
g.add_edge("D", "F");
g.add_edge("E", "F");
console.log(g.dfs_stack("A"));

console.log(g.bfs("A"));
