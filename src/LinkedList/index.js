import LinkedList from './LinkedList'
import removeDuplicates from './removeDuplicates'
import findKthToTheLast from './findKthToTheLast'

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
console.log(myLinkedList.toString())


// CTCI Problem: 2.1
removeDuplicates(myLinkedList)
console.log(myLinkedList.toString())

// CTCI Problem 2.2
console.log('Find 3rd element from the last, i.e. 40');
let found = findKthToTheLast(myLinkedList, 3)
console.log('Found', found)
console.log(myLinkedList.toString())
