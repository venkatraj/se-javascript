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
    for (let i = 0; i <= this.length; i++) {
      if (i === index) {
        return currentNode
      }
      currentNode = currentNode.next
    }
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

  push_back(value) {
    if (this.empty()) {
      this.head = new Node(value)
      return
    }
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(value)
  }

  pop_back() {
    if (this.empty()) return null

    let currentNode = this.head
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next
    }
    const poppedNode = currentNode.next
    currentNode.next = null
    return poppedNode.value
  }

  front() {
    return this.head.value
  }

  back() {
    if (this.empty()) return

    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }

  insert(index, value) {
    if (index === 0 && this.empty()) {
      this.head = new Node(value)
      return
    } 

    if (index === 0 && !this.empty()) {
      let prevHead = this.head
      this.head = new Node(value)
      this.head.next = prevHead
      return
    }

    let currentNode = this.head
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next
    }
    let nodeToMove = currentNode.next
    let node = new Node(value)
    currentNode.next = node
    node.next = nodeToMove
  }

  erase(index) {
    if (index < 0) return
    if (index === 0 && this.empty()) return

    if (index === 0 && !this.empty()) {
      this.head = this.head.next
      return
    }

    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {      
      currentNode = currentNode.next
    }
    
    currentNode.next = currentNode.next.next
  }

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