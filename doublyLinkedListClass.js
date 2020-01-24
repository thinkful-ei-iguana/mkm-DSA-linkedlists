class _DBLNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _DBLNode(item, this.head, null);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      this.foot = new _DBLNode(item, this.foot, null);
    }
  }

  insertBefore(item, itemBefore) {
    const newNode = new _DBLNode(item, null, null);
    if (!this.head) {
      return null;
    } else {
      let checkItem = this.head;
      while (checkItem !== null) {
        if (checkItem.value === itemBefore) {
          newNode.prev = checkItem.prev;
          newNode.next = checkItem;
          checkItem.prev = newNode;
          return;
        }
        checkItem = checkItem.next;
      }

    }
  }

  insertAfter(item, itemAfter) {
    const newNode = new _DBLNode(item, null, null);
    if (!this.head) {
      return null;
    }
    let checkItem = this.foot;
    while (checkItem !== null) {
      if (checkItem.value === itemAfter) {
        newNode.prev = checkItem;
        newNode.next = checkItem.next;
        checkItem.next = newNode;
        return;
      }
      checkItem = checkItem.prev;
    }
  }

  insertAt(item, position) {
    //start at the head
    let tempNode = this.head;
    let after;
    for (let i = 1; i < position - 1; i++) {
      tempNode = tempNode.next;
    }
    after = tempNode.next;
    console.log(`Adding ${item} after ${tempNode.value} before ${after.value}.`);
    tempNode.next = new _DBLNode(item, after);
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head,
    //make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of the previous node
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      console.log(currNode);
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = DoublyLinkedList;