function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// push
// This function should add a node to the end of the SinglyLinkedList.It should return the list so that the method can be chained.

// adds element to the end of the list
SinglyLinkedList.prototype.push = function(element) {
  let node = new Node(element);
  // store current Node
  let current;
  // set new node at as head if there isn't one
  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;
    // move down list until next is null, then set next to equal node
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;
  }
  this.length++;
  return this;
};

// pop
// This function should remove a node at the end of the SinglyLinkedList.
// It should return the node removed.
SinglyLinkedList.prototype.pop = function() {
  if (!this.length) return undefined;

  // set current value to the head
  let current = this.head;
  let prev;

  // go down list until last element is reached
  while (current.next) {
    prev = current;
    current = current.next;
  }

  // delete last element and set previous to the tail
  delete prev.next;
  prev = this.tail;
  this.length--;

  return current.val;
};

// unshift
// This function should add a node to the beginning of the SinglyLinkedList.
// It should return the list so that the method can be chained.
SinglyLinkedList.prototype.unshift = function(element) {
  let node = new Node(element);
  node.next = this.head;
  this.head = node;

  this.length++;
  return this;
};

// shift
// This function should remove a node at the beginning of the SinglyLinkedList. It should return the node removed.

// set
// This function should update the value of a node at a given index of the SinglyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.

// _get
// This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

// _insert
// This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return the new length of the SinglyLinkedList.

// remove
// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node.

// reverse
// This function should reverse all of the nodes in a SinglyLinkedList. It should return the reversed SinglyLinkedList.
