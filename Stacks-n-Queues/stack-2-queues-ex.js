class Stack {
  q1 = new Queue();
  q2 = new Queue();
  current_q;
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    this.current_q = "q1";
  }
  push(val) {
    if (this.current_q == "q1") {
      this.q1.enqueue(val);
      let dq = this.q2.dequeue();
      while (dq) {
        4;
        this.q1.enqueue(dq);
        dq = this.q2.dequeue();
      }
      this.current_q = "q2";
    } else if (this.current_q == "q2") {
      this.q2.enqueue(val);
      let dq = this.q1.dequeue();
      while (dq) {
        this.q2.enqueue(dq);
        dq = this.q1.dequeue();
      }
      this.current_q = "q1";
    }
    return this;
  }
  pop() {
    switch (this.current_q) {
      case "q1":
        return this.q2.dequeue();
        break;
      case "q2":
        return this.q1.dequeue();
        break;
    }
    return null;
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.push(10).push(20).push(30);
s.pop(); // 30
s.pop(); // 20
s.pop(); // 10
s.pop(); // null
s.push(30).push(40).push(50);
s.pop(); // 50
s.push(60);
s.pop(); // 60
