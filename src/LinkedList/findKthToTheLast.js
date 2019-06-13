const findKthToTheLast = (myLinkedList, k) => {
  let totalNodes = myLinkedList.size()
  let indexOfNodeToRemove = totalNodes - k;
  return myLinkedList.value_at(indexOfNodeToRemove)
}

export default findKthToTheLast