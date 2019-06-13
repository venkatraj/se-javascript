import Node from './Node'

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  empty() {
    return !this.length;
  }

  value_at(index) {
    if (index < 0) return null;

    let currentNode = this.head
    for (let i = 1; i <= this.length; i++) {
      if (i === index) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  insert(index, value) {
    const node = new Node(value)
  }

  push_front(value) {
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.length++
  }

  pop_front() {
    const poppedNode = this.head
    this.head = this.head.next
    this.length--
    return poppedNode.value
  }

  push_back(value) {}

  toString() {
    if (this.length === 0) return 'Empty LinkedList'
    let linkedListString = ''
    let currentNode = this.head
    while (currentNode !== null) {
      linkedListString += `${currentNode.value} -> `
      currentNode = currentNode.next
    }
    return linkedListString.slice(0, linkedListString.length - 3)
  }

}

export default LinkedList