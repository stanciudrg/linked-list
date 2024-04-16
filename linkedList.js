class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
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
    // If the list is empty, there is no tail - return null;
    if (this.head === null) return null;

    let tmp = this.head;

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    return tmp;
  }

  // Returns the node containing 'data', otherwise returns null
  get(data) {
    // If the list is empty, there is nothing to get - return null;
    if (this.head === null) return null;
    // If head has 'data', return the head
    if (this.head.data === data) return this.head;

    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.data === data) return tmp;
      tmp = tmp.next;
    }

    return null;
  }

  // Returns the node at the given index, otherwise returns undefined
  at(index) {
    // Ignore requests for indexes lower than 0;
    if (index < 0) return;
    // If the list is empty, there is nothing to return - stop;
    if (this.head === null) return;
    if (index === 0) return this.head;

    let tmp = this.head;
    let counter = 0;

    while (counter < index) {
      if (tmp.next === null) return;
      tmp = tmp.next;
      counter++;
    }

    return tmp;
  }

  // Removes the last element from the list
  pop() {
    // If the list is empty, there is nothing to remove - return
    if (this.head === null) return;

    let tmp = this.head;
    let previous = tmp;

    // Keep track of previous and current nodes
    while (tmp.next !== null) {
      previous = tmp;
      tmp = tmp.next;
    }

    // If the list has only one node, remove the head node
    if (tmp === this.head) {
      this.head = null;
      return;
    }

    // Otherwise remove the last node by setting the previous node's next
    // value to null;
    previous.next = null;
  }

  // Returns true if the passed in data is in the list, otherwise returns false
  contains(data) {
    // If the list is empty, there is nothing to find - return false
    if (this.head === null) return false;
    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.data === data) return true;
      tmp = tmp.next;
    }

    return false;
  }

  // Returns the index of the node containing the data, otherwise returns null
  find(data) {
    // If the list is empty, there is nothing to find - return null
    if (this.head === null) return null;
    // If the head contains 'data', return its index (0);
    if (this.head.data === data) return 0;

    let tmp = this.head;
    // Index === number of iterations within the while loop
    let index = 0;

    while (tmp !== null) {
      if (tmp.data === data) return index;
      tmp = tmp.next;
      index++;
    }

    return null;
  }

  // Represents the linkedList nodes as strings
  toString() {
    // If the list is empty, there is nothing to transform into a string - return
    if (this.head === null) return;

    let tmp = this.head;
    let string = "";

    while (tmp !== null) {
      // Add the data of each node into the string
      string = string.concat(`( ${tmp.data} ) -> `);
      tmp = tmp.next;
    }

    // Add the permanent 'null' value at the end of the string
    // to visualize the end of the list
    string = string.concat("null");
    return string;
  }

  // Returns an array containing the data of each node
  toArray() {
    // If the list is empty, there is nothing to push into the array - return empty array
    if (this.head === null) return [];

    let tmp = this.head;
    let array = [];

    while (tmp !== null) {
      array.push(tmp.data);
      tmp = tmp.next;
    }

    return array;
  }

  // Inserts a new node containing the provided data at the given index
  insertAt(data, index) {
    // Ignore requests for indexes lower than 0;
    if (index < 0) return;
    // Fall back on the prepend method when the request is to add the node at
    // the beginning of the list
    if (index === 0) return this.prepend(data);
    // If list is empty and the request is not to prepend, stop
    if (index > 0 && this.head === null) return false;

    // Keep track of previous and current nodes
    let tmp = this.head;
    let previous = tmp;

    let counter = 0;

    // Attempt to go deeper into the list until counter is equal to index
    while (counter < index) {
      // Break the loop and prevent further action if the end of the list is
      // reached before the counter reaches the index (the index does not exist);
      if (tmp === null) return false;
      previous = tmp;
      tmp = tmp.next;
      counter++;
    }

    // Set the previous node's next value to a new Node that contains the provided data,
    // then set the new node's next value to the current node (tmp);
    previous.next = new Node(data, tmp);
    return true;
  }

  // Removes the node at the given index
  removeAt(index) {
    // If the list is empty, there is nothing to remove - stop
    if (this.head === null) return false;
    // Ignore requests for indexes lower than 0;
    if (index < 0) return;
    // Replace the current head node with the head.next node
    // when the request is to remove the first node within the list
    if (index === 0) return (this.head = this.head.next);

    // Keep track of previous and current nodes
    let tmp = this.head;
    let previous = tmp;
    let counter = 0;

    // Attempt to go deeper into the list until counter is equal to index
    while (counter < index) {
      // Break the loop and prevent further action if the end of the list is
      // reached before the counter reaches the index (the index does not exist);
      if (tmp.next === null) return false;
      previous = tmp;
      tmp = tmp.next;
      counter++;
    }

    // Set the previous node's next value to the current node's next value
    // linked list before: previous.next => tmp => tmp.next
    // linked list after: previous.next => tmp.next
    // The middle node (tmp) has been removed
    previous.next = tmp.next;
    return true;
  }

  // Loops through the list until 'data' is found, then removes it and returns true,
  // otherwise returns false
  findAndRemove(data) {
    // If the list is empty, there is nothing to remove - stop
    if (this.head === null) return false;
    // Replace the current head node with the head.next node
    // when the request is to remove the first node within the list
    if (this.head.data === data) return (this.head = this.head.next);

    // Keep track of previous and current nodes
    let tmp = this.head;
    let previous = tmp;

    while (tmp !== null) {
      if (tmp.data === data) {
        // Set the previous node's next value to the current node's next value
        // linked list before: previous.next => tmp => tmp.next
        // linked list after: previous.next => tmp.next
        // The middle node (tmp) has been removed
        previous.next = tmp.next;
        return true;
      }
      previous = tmp;
      tmp = tmp.next;
    }

    return false;
  }
}