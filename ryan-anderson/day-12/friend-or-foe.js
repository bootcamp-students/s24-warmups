function friend(friends) {
  return friends.filter(name => name.length == 4)
}

// filter to return only strings with length 4

/*
  Ember's Feedback:
  - Good job!
  - Good use of filter :D
  - get in the habit of using triple equals! Double equals should be the context dependent exception
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
