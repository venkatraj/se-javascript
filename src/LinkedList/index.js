import LinkedList from './LinkedList'
import removeDuplicates from './removeDuplicates'
import findKthToTheLast, { findKthToTheLastWOUsingSize } from './findKthToTheLast'
import deleteNode from './deleteNode'

const myLinkedList = new LinkedList()
myLinkedList.push_front(50)
myLinkedList.push_front(40)
myLinkedList.push_front(30)
myLinkedList.push_front(20)
myLinkedList.push_front(10)
myLinkedList.push_front(5)
myLinkedList.push_back(60)
myLinkedList.insert(4, 35)
myLinkedList.push_back(35)
myLinkedList.insert(5, 5)
// console.log(myLinkedList.toString())


// CTCI Problem: 2.1
removeDuplicates(myLinkedList)
console.log(myLinkedList.toString())

// CTCI Problem 2.2
console.log('Find 3rd element from the last, i.e. 40');
let found = findKthToTheLast(myLinkedList, 3)
console.log('Found', found)

// CTCI Problem 2.2 
// Without using linkedlist length
console.log('Find 4th element from the last, i.e. 35');
found = findKthToTheLastWOUsingSize(myLinkedList, 4)
console.log('Found', found)

// CTCI Problem 2.3
console.log('Delete the Node, i.e. 35');
let nodeToDelete = myLinkedList.head.next.next.next.next;
deleteNode(myLinkedList, nodeToDelete)
console.log(myLinkedList.toString())

// 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition 5)
// 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8