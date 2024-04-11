class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing 'data' to the end of the list
  append(data) {
    if (this.head === null) return (this.head = new Node(data));

    let tmp = this.head;

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    tmp.next = new Node(data);
  }

  // Adds a new node containing 'data' to the start of the list
  prepend(data) {
    this.head = new Node(data, this.head);
  }

  // Returns the total number of nodes in the list
  size() {
    if (this.head === null) return 0;

    let tmp = this.head;
    let size = 1;

    while (tmp.next !== null) {
      tmp = tmp.next;
      size++;
    }

    return size;
  }

  // Returns the first node in the list
  getHead() {
    return this.head;
  }

  // Returns the last node in the list
  getTail() {
    // If the list is empty, return the head (null);
    if (this.head === null) return this.head;

    let tmp = this.head;

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    return tmp;
  }

  // Returns the node at the given index, otherwise returns undefined
  at(index) {
    let tmp = this.head;
    let counter = 0;

    while (counter < index) {
      if (tmp.next === null) return;
      tmp = tmp.next;
      counter++;
    }

    return tmp;
  }
}
