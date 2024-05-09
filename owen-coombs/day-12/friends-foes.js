function friend(friends) {
  let friend = friends.filter(name => name.length === 4)
  return friend
}
// use filter method
// return friend
/*
  Ember's Feedback:
  - Great job! I am sure you have a really good of understanding of filter now.
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
