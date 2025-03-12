import { PriorityQueue } from "./PriorityQueue.ts";

type WeigthedGraphEdge = {
  node: string;
  weight: number;
};
export class WeigthedGraph {
  adjacencyList: Record<string, WeigthedGraphEdge[] | null> = {};
  constructor() {
    this.adjacencyList = {};
  }
  add_vertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  add_edge(vertex: string, to_vertex: string, weight: number) {
    if (!this.adjacencyList[vertex] || !this.adjacencyList[to_vertex]) {
      throw new Error("vertex does not exist");
    }
    this.adjacencyList[vertex].push({ node: to_vertex, weight: weight });
    this.adjacencyList[to_vertex].push({ node: vertex, weight: weight });
  }

  remove_edge(vertex: string, to_vertex: string) {
    const v1 = this.adjacencyList[vertex];
    const v2 = this.adjacencyList[to_vertex];

    if (v1 && Array.isArray(v1)) {
      this.adjacencyList[vertex] = v1.filter((val) => val.node !== to_vertex);
    }
    if (v2 && Array.isArray(v2)) {
      this.adjacencyList[to_vertex] = v2.filter((val) => val.node !== vertex);
    }
  }

  remove_vertex(vertex: string) {
    const v = this.adjacencyList[vertex];
    if (v && Array.isArray(v)) {
      for (const node of v) {
        this.remove_edge(vertex, node.node);
      }
    }
    this.adjacencyList[vertex] = null;
  }

  shortest_path(vertex_1: string, vertex_2: string) {
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    let visited = new Set();
    for (const k of Object.keys(this.adjacencyList)) {
      distances[k] = Infinity;
      previous[k] = null;
    }
    distances[vertex_1] = 0;
    let q = new PriorityQueue();
    for (let k of Object.keys(distances)) {
      if (distances[k] !== Infinity) q.enqueue(k, distances[k]);
    }
    const graph_length = Object.keys(this.adjacencyList).length;
    while (q.values.length) {
      const vertex = q.dequeue();
      if (vertex?.val === vertex_2) {
        break;
      }
      if (vertex) {
        const list = this.adjacencyList[vertex.val];
        if (list)
          for (let vertex_adj of list) {
            const prev_distance = distances[previous[vertex.val]!] || 0;
            const full_distance = prev_distance + vertex_adj.weight;
            if (full_distance < distances[vertex_adj.node]) {
              distances[vertex_adj.node] = full_distance;
              previous[vertex_adj.node] = vertex.val;
              if (!visited.has(vertex_adj.node))
                q.enqueue(vertex_adj.node, full_distance);
            }
          }
        visited.add(vertex.val);
      }
    }
    //follow previous
    let answer = [];
    let current = vertex_2;
    answer.unshift(current);
    while (true) {
      if (previous[current] === null) {
        break;
      }
      answer.unshift(previous[current]);
      current = previous[current]!;
    }
    console.log(previous);
    return answer;
  }
  get_current_sum(previous: Record<string, string | null>) {}
}

let wg = new WeigthedGraph();

wg.add_vertex("A");
wg.add_vertex("B");
wg.add_vertex("C");
wg.add_vertex("D");
wg.add_vertex("E");
wg.add_vertex("F");

wg.add_edge("A", "B", 4);
wg.add_edge("A", "C", 2);
wg.add_edge("B", "E", 3);
wg.add_edge("C", "D", 2);
wg.add_edge("C", "F", 4);
wg.add_edge("D", "F", 1);
wg.add_edge("D", "E", 3);
wg.add_edge("F", "E", 1);
console.log(wg.shortest_path("A", "E"));
1 + 1;
