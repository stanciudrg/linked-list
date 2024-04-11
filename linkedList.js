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
}
