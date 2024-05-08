//use filter to find the length 4
//name should be equal to 4
//return a new array
//
function friend(friends) {
  let friend = friends.filter(name => name.length === 4)
  return friend
}
/*
  Ember's Feedback:
  - good job!
  - Good use of filter :D
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
