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
  this.tail = prev;
  prev.next = null;
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
// This function should remove a node at the beginning of the SinglyLinkedList.
// It should return the node removed.
SinglyLinkedList.prototype.shift = function() {
  if (!this.length) return undefined;

  let current = this.head;
  this.head = current.next;
  this.length--;

  // If list is empty after shift, set tail to null
  if (!this.length) {
    this.tail = null;
  }

  return current.val;
};

// set
// This function should update the value of a node at a given index of the SinglyLinkedList.
// It should return true if the node is updated successfully,
// or false if an invalid index is passed in.
SinglyLinkedList.prototype.set = function(index, value) {
  if (index > this.length - 1 || index < 0) return false;

  let node = new Node(value);
  let current = this.head;
  let idx = 0;
  let prev;

  if (index === 0) {
    node.next = this.head.next;
    this.head = node;
  } else {
    while (idx !== index) {
      prev = current;
      current = current.next;
      idx++;
    }
    if (index === this.length - 1) {
      this.tail = node;
      prev.next = node;
    } else {
      prev.next = node;
      node.next = current.next;
    }
  }

  return true;
};

// _get
// This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.
SinglyLinkedList.prototype.get = function(index) {
  if (index < 0 || index > this.length - 1) {
    return null;
  }
  let idx = 0;
  let current = this.head;

  while (idx < index) {
    current = current.next;
    idx++;
  }
  return current.val;
};

// _insert
// This internal/helper function should insert a node at a specified index in a SinglyLinkedList.
// It should return the new length of the SinglyLinkedList.
SinglyLinkedList.prototype.insert = function(index, element) {
  let node = new Node(element);
  let idx = 0;
  let current = this.head;
  let prev;

  while (idx < index) {
    prev = current;
    current = current.next;
    idx++;
  }

  prev.next = node;
  node.next = current;
  this.length++;

  return this.length;
};
// remove
// This function should remove a node at a specified index in a SinglyLinkedList.
// It should return the removed node.
SinglyLinkedList.prototype.remove = function(index) {
  let idx = 0;
  let current = this.head;
  let prev = current;

  while (idx < index) {
    prev = current;
    current = current.next;
    idx++;
  }

  prev.next = current.next;
  this.length--;

  return current;
};

// reverse
// This function should reverse all of the nodes in a SinglyLinkedList.
// It should return the reversed SinglyLinkedList.
SinglyLinkedList.prototype.reverse = function() {
  let current = this.head;
  let prev;
  let next;

  while (current) {
    // define next node
    next = current.next;
    // update next node to previous node
    current.next = prev;
    // make previous node the current node
    prev = current;
    // update current node to the next node
    current = next;
  }
  this.head = prev;

  return this;
};
