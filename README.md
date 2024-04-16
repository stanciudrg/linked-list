# linked-list
Utility class for creating a Linked List data structure with the following methods:

- append(data) - Adds a new node containing 'data' to the end of the list.
- prepend(data) - Adds a new node containing 'data' to the start of the list.
- size() - Returns the total number of nodes in the list.
- getHead() - Returns the first node in the list.
- getTail() - Returns the last node in the list.
- get(data) - Returns the node containing 'data', otherwise returns null.
- at(index) - Returns the node at the given index, otherwise returns undefined.
- pop() - Removes the last element from the list.
- contains(data) - Returns true if the passed in data is in the list, otherwise returns false.
- find(data) - Returns the index of the node containing the data, otherwise returns null.
- toString() - Represents the Linked List nodes as strings.
- toArray() -  Returns an array containing the data of each node.
- insertAt(data, index) - Inserts a new node containing the provided data at the given index.
- removeAt(index) - Removes the node at the given index.
- findAndRemove(data) - Loops through the list until 'data' is found, then removes it and returns true, otherwise returns false
