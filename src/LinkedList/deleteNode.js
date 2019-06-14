const deleteNode = (myLinkedList, nodeToDelete) => {
  if (nodeToDelete === null || nodeToDelete.next === null) {
    return false
  }
  let nextNode = nodeToDelete.next
  nodeToDelete.value = nextNode.value
  nodeToDelete.next = nextNode.next
}

export default deleteNode