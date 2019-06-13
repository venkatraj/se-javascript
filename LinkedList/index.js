import LinkedList from './LinkedList'

const myLinkedList = new LinkedList()
console.log(myLinkedList.empty())
myLinkedList.push_front(50)
console.log(myLinkedList)
myLinkedList.push_front(40)
console.log(myLinkedList)
myLinkedList.push_front(30)
console.log(myLinkedList)
myLinkedList.push_front(20)
console.log(myLinkedList)
myLinkedList.push_front(10)
console.log(myLinkedList)
myLinkedList.push_front(5)
console.log(myLinkedList)

console.log(myLinkedList.pop_front())
console.log(myLinkedList)
console.log(myLinkedList.empty())
console.log(myLinkedList.size())
console.log(myLinkedList.value_at(3))

console.log(myLinkedList.toString())