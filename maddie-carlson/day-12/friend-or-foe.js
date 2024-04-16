function friend(friends){
  //function takes an array of strings, various names
  //needs to return names, but only the ones that have exactly four letters (presumably not numbers)
  
  //to solve, use filter to test the names against their length
  return friends.filter((name) => {
    if (name.length === 4) {
      return true
    } else {
      return false
    }
  })
}
