const LinkedList = require('./linkedListClass');
const DoublyLinkedList = require('./doublyLinkedListClass');
let cycleList = new LinkedList;

function main() {
  let SLL = new LinkedList;

  cycleList.insertLast('1');
  cycleList.insertLast('2');
  cycleList.insertLast('3');
  cycleList.insertLast('4');
  cycleList.insertBefore('5', '1');

  cycleList.find('1').next = cycleList.find('5');


  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');

  // SLL.remove('squirrel');

  // SLL.insertBefore('Athena', 'Boomer');

  // SLL.insertAfter('Hotdog', 'Helo');

  // SLL.insertAt('Kat', 3);

  // SLL.remove('Tauhida');

  return SLL;

}

let linkedList = main();

/////////////

function display(linkedList) {
  let arr = [];
  let tempNode = linkedList.head;
  // to prevent infinite loop for 
  while (tempNode !== null) {
    arr = [...arr, tempNode.value];
    tempNode = tempNode.next;
  }
  return arr;
}
// console.log(display(linkedList));
///////////////////////////
function getSize(linkedList) {
  let count = 0;
  let current = linkedList.head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}
// console.log(getSize(linkedList));
///////////////////////////
function isEmpty(linkedList) {
  if (!linkedList.head) {
    return true;
  }
  return false;
}
// console.log(isEmpty(linkedList));
///////////////////////////
function findPrevious(node, list) {
  // finds the node before the item you are looking for
  let currNode = list.head;
  let previous;
  while (currNode.value !== node) {
    previous = currNode;
    currNode = currNode.next;
  }
  return previous.value;
}
// console.log(findPrevious('Helo', linkedList));
///////////////////////////
function findLast(linkedList) {
  // returns the last node in the linked list
  let currNode = linkedList.head;
  if (!currNode) {
    console.log('List is empty');
  }
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}
// console.log(findLast(linkedList));
///////////////////////////

// 4. Mystery Program

// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

// The program searches for duplicates in a list and removes them if found. 
// O(n^2)

//////////////////

// 5. Reverse a List

function reverseList(head) {

  if (!head || !head.next) {
    return head;
  }
  let reversedHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return reversedHead;
}
// console.log(reverseList(linkedList.head));

// 6. 3rd From the End

function findThirdFromEnd(linkedList) {
  let current = linkedList.head;
  let result = linkedList.head;
  let previous = linkedList.head;
  while (current.next !== null) {
    current = current.next;
    previous = current;
    result = previous;
  }
  return result.value;
}
// console.log(findThirdFromEnd(linkedList));

// 7. Middle of a List

function findMidElement(linkedList) {
  let currNode = linkedList.head;
  let listLength = getSize(linkedList);

  let middleElement = '';
  let middleElementPlusOne = '';

  if (listLength % 2 === 0) {
    middleElement = listLength / 2;
    for (let i = 1; i < middleElement; i++) {
      currNode = currNode.next;
    }
    middleElementPlusOne = currNode.next;
    return `List length is an even number; the two middle elements are ${currNode.value}  and ${middleElementPlusOne}`;
  }

  if (listLength % 2 === 1) {
    middleElement = Math.round(listLength / 2);
    for (let i = 1; i < middleElement; i++) {
      currNode = currNode.next;
    }
    return currNode.value;
  }
}
// console.log(findMidElement(linkedList));

// 8. Cycle in a list

function cycle(linkedList) {
  const tempList = new LinkedList;
  let current = linkedList.head;
  while (current !== null) {
    tempList.insertLast(current.value);
    let tempCurr = tempList.head;
    while (tempCurr !== null) {
      if (current.next.value === tempCurr.value) {
        return true;
      }
      tempCurr = tempCurr.next;
    }
    current = current.next;
  }
  return false;
}
console.log(cycle(cycleList));

// 9. Doubly Linked List

function mainDLL() {
  let DLL = new DoublyLinkedList;

  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertAfter('Tauron', 'Gemenon');

  // DLL.remove('Picon');
  console.log(display(DLL));
  return DLL;
}
console.log(mainDLL());