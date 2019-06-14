const findKthToTheLast = (myLinkedList, k) => {
  let totalNodes = myLinkedList.size()
  let indexOfNodeToRemove = totalNodes - k;
  return myLinkedList.value_at(indexOfNodeToRemove)
}

const findKthToTheLastWOUsingSize = (myLinkedList, k) => {
  let pointerOne = myLinkedList.head
  let pointerTwo = myLinkedList.head
  let i = 0;
  while (i < k) {
    pointerOne = pointerOne.next
    i++
  }
  while (pointerOne.next !== null) {
    pointerOne = pointerOne.next
    pointerTwo = pointerTwo.next
  }
  return pointerTwo.next.value
}

export { findKthToTheLast as default, findKthToTheLastWOUsingSize }