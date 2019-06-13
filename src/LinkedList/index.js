import LinkedList from './LinkedList'
import removeDuplicates from './removeDuplicates'

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

