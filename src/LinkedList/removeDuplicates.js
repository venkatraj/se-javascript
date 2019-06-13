const removeDuplicates = (myLinkedList) => {
  for (let i = 0; i < myLinkedList.size(); i++) {
    let value = myLinkedList.value_at(i)    
    for (let j = i + 1; j < myLinkedList.size(); j++) {
      if (value === myLinkedList.value_at(j)) {
        myLinkedList.erase(j)
      }
    }
  }
}

export default removeDuplicates